import React, { useState, useEffect } from 'react';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import './components/styles.css'; 

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <RegistrationForm />
      <button onClick={toggleDashboard}>Dashboard</button>
      {showDashboard && <Dashboard onClose={toggleDashboard} />}
    </div>
  );
}

export default App;