import React, { useState } from 'react';
import UserProfile from './UserProfile';
import './UserProfileApp.css';

/**
 * UserProfileApp Component
 * 
 * Parent component that manages userId state and renders UserProfile.
 * Provides buttons to change userId, which triggers new data fetches.
 */
function UserProfileApp() {
  // State for current user ID, initialized to 1
  const [userId, setUserId] = useState(1);

  // Handler for refresh button - fetches a random user (ID between 1-10)
  const handleRefresh = () => {
    const randomUserId = Math.floor(Math.random() * 10) + 1;
    setUserId(randomUserId);
  };

  return (
    <div className="user-profile-app">
      <div className="controls">
        <h3>Select User:</h3>
        <div className="button-group">
          <button 
            onClick={() => setUserId(1)} 
            className={`btn ${userId === 1 ? 'active' : ''}`}
          >
            User 1
          </button>
          <button 
            onClick={() => setUserId(2)} 
            className={`btn ${userId === 2 ? 'active' : ''}`}
          >
            User 2
          </button>
          <button 
            onClick={() => setUserId(3)} 
            className={`btn ${userId === 3 ? 'active' : ''}`}
          >
            User 3
          </button>
          <button 
            onClick={handleRefresh} 
            className="btn btn-refresh"
          >
            Random User
          </button>
        </div>
      </div>
      <UserProfile userId={userId} />
    </div>
  );
}

export default UserProfileApp;

