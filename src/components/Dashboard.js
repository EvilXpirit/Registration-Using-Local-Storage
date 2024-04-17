import React, { useEffect, useState } from 'react';

const Dashboard = ({ onClose }) => {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editData, setEditData] = useState({ fullName: '', email: '', mobileNo: '', username: '' });

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(users[index]);
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editData;
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setEditIndex(-1);
    setEditData({ fullName: '', email: '', mobileNo: '', username: '' });
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Registered Users</h2>
        <button className="modal-close" onClick={onClose}>X</button>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email Id</th>
              <th>Mobile No</th>
              <th>User Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{editIndex === index ? <input type="text" value={editData.fullName} onChange={(e) => setEditData({ ...editData, fullName: e.target.value })} /> : user.fullName}</td>
                <td>{editIndex === index ? <input type="email" value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} /> : user.email}</td>
                <td>{editIndex === index ? <input type="text" value={editData.mobileNo} onChange={(e) => setEditData({ ...editData, mobileNo: e.target.value })} /> : user.mobileNo}</td>
                <td>{editIndex === index ? <input type="text" value={editData.username} onChange={(e) => setEditData({ ...editData, username: e.target.value })} /> : user.username}</td>
                <td>
                  {editIndex === index ? (
                    <button onClick={handleSave}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
