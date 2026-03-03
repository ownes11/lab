import React from 'react';
import { RegistrationForm } from './components/RegistrationForm.jsx';

export const App = () => {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Lab 4.1 – Registration Form</h1>
      <p style={{ color: '#555', fontSize: 14 }}>
        This lab demonstrates controlled components and event handling in React (onChange, onSubmit, preventDefault).
      </p>
      <RegistrationForm />
    </main>
  );
};

