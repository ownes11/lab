import React, { useState } from 'react';

const validateName = (name) => {
  if (!name.trim()) {
    return 'Name is required.';
  }
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters.';
  }
  return '';
};

const validateEmail = (email) => {
  if (!email.trim()) {
    return 'Email is required.';
  }
  const simpleEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!simpleEmailRegex.test(email)) {
    return 'Email must be a valid email address.';
  }
  return '';
};

const validateAge = (age) => {
  if (age === '' || age === null) {
    return 'Age is required.';
  }
  const numericAge = Number(age);
  if (Number.isNaN(numericAge)) {
    return 'Age must be a number.';
  }
  if (numericAge < 18) {
    return 'Age must be 18 or older.';
  }
  return '';
};

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');

  const [success, setSuccess] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(validateName(value));
    setSuccess(false);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
    setSuccess(false);
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);
    setAgeError(validateAge(value));
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const ageValidation = validateAge(age);

    setNameError(nameValidation);
    setEmailError(emailValidation);
    setAgeError(ageValidation);

    if (nameValidation || emailValidation || ageValidation) {
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label style={{ display: 'block', marginBottom: 8 }}>
        <span>Name</span>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
        />
        {nameError && (
          <p style={{ color: 'red', marginTop: 4, fontSize: 13 }}>{nameError}</p>
        )}
      </label>

      <label style={{ display: 'block', marginBottom: 8 }}>
        <span>Email</span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
        />
        {emailError && (
          <p style={{ color: 'red', marginTop: 4, fontSize: 13 }}>{emailError}</p>
        )}
      </label>

      <label style={{ display: 'block', marginBottom: 8 }}>
        <span>Age</span>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={handleAgeChange}
          style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
        />
        {ageError && (
          <p style={{ color: 'red', marginTop: 4, fontSize: 13 }}>{ageError}</p>
        )}
      </label>

      <button
        type="submit"
        style={{
          marginTop: 12,
          padding: '8px 16px',
          backgroundColor: '#2563eb',
          color: '#fff',
          borderRadius: 4,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>

      {success && (
        <p style={{ color: 'green', marginTop: 12 }}>
          Registration successful!
        </p>
      )}
    </form>
  );
};

