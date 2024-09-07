import React, { useState } from "react";
import axios from "axios";
import "./StudentLogin.css"; // Import the CSS file

function Adminreg() {
  const [adminId, setId] = useState("");
  const [adminName, setName] = useState("");
  const [adminAge, setAge] = useState("");
  const [adminGender, setGender] = useState("");
  const [adminPassword, setPassword] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    const newAdmin = {
      adminId,
      adminName,
      adminAge,
      adminGender,
      adminPassword,
    };
    axios
      .post("http://localhost:8070/admin/add", newAdmin)
      .then(() => {
        alert("Admin added");
        setId("");
        setName("");
        setAge("");
        setGender("");
        setPassword("");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container">
      <div className="paper">
        <h2 className="header">Register Admin</h2>
        <form onSubmit={sendData} className="form">
          <div className="form-group">
            <label htmlFor="adminId">Admin Id</label>
            <input
              id="adminId"
              type="text"
              required
              className="form-control"
              value={adminId}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter Admin Id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="adminName">Name</label>
            <input
              id="adminName"
              type="text"
              required
              value={adminName}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="adminAge">Age</label>
            <input
              id="adminAge"
              type="number"
              required
              className="form-control"
              value={adminAge}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age"
            />
          </div>
          <div className="form-group">
            <label htmlFor="adminGender">Gender</label>
            <select
              id="adminGender"
              required
              className="form-control"
              value={adminGender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="adminPassword">Password</label>
            <input
              id="adminPassword"
              type="password"
              className="form-control"
              required
              value={adminPassword}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adminreg;
