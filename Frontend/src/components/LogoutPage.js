import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LogoutPage = () => {
  const history = useHistory();

  useEffect(() => {
    // Clear any authentication data here
    // For example, clearing localStorage or session storage
    localStorage.removeItem('token'); // Example of removing token from localStorage

    // Redirect to login page after logout
    history.push('/login');
  }, [history]);

  return (
    <div>
      <h1>Logout Page</h1>
      <p>You have been successfully logged out.</p>
    </div>
  );
};

export default LogoutPage;
