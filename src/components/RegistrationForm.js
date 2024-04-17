import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', mobileNo: '', username: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify([...users, formData]));
    setFormData({ fullName: '', email: '', mobileNo: '', username: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} />
      <input type="text" name="mobileNo" placeholder="Mobile No" value={formData.mobileNo} onChange={handleChange} />
      <input type="text" name="username" placeholder="User Name" value={formData.username} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
