import React, { useState, useEffect } from 'react';
import './UserProfile.css';

/**
 * UserProfile Component
 * 
 * Fetches and displays user data from an API using useEffect hook.
 * Demonstrates proper cleanup with AbortController to prevent memory leaks.
 * 
 * Dependency Array Explanation:
 * The userId is included in the dependency array because:
 * - When userId changes, we need to fetch new user data
 * - Without userId in dependencies, the effect would only run once on mount
 * - Including userId ensures the effect re-runs whenever userId prop changes
 * - This is essential for fetching different users when the parent component updates userId
 */
function UserProfile({ userId }) {
  // State for user data
  const [user, setUser] = useState(null);
  
  // State for loading indicator
  const [loading, setLoading] = useState(true);
  
  // State for error messages
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create AbortController for cleanup
    const abortController = new AbortController();
    const signal = abortController.signal;

    // Reset states when userId changes
    setLoading(true);
    setError(null);
    setUser(null);

    // Fetch user data from API
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal }
        );

        // Check if request was aborted
        if (signal.aborted) {
          return;
        }

        if (!response.ok) {
          throw new Error(`Failed to fetch user: ${response.status}`);
        }

        const userData = await response.json();
        
        // Check again if request was aborted before updating state
        if (!signal.aborted) {
          setUser(userData);
          setLoading(false);
        }
      } catch (err) {
        // Don't update state if request was aborted
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
          return;
        }
        
        if (!signal.aborted) {
          setError(err.message || 'An error occurred while fetching user data');
          setLoading(false);
        }
      }
    };

    fetchUser();

    // Cleanup function: abort fetch if component unmounts or userId changes
    // This prevents memory leaks and updates on unmounted components
    return () => {
      abortController.abort();
    };
  }, [userId]); // Dependency array includes userId to refetch when it changes

  // Handler for refresh button - fetches a random user
  const handleRefresh = () => {
    // The parent component will update userId, which will trigger useEffect
    // This is handled by the parent component
  };

  // Display loading state
  if (loading) {
    return (
      <div className="user-profile">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="user-profile">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  // Display user data
  if (user) {
    return (
      <div className="user-profile">
        <div className="user-card">
          <h2>{user.name}</h2>
          <div className="user-info">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <div className="address">
              <strong>Address:</strong>
              <p>
                {user.address.street}, {user.address.suite}<br />
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
            <div className="company">
              <strong>Company:</strong> {user.company.name}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default UserProfile;

