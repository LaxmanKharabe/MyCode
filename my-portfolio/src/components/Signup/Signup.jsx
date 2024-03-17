import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const [exists, setExists] = useState('');

  const handleChange = (e) => {
    setInput((prevInput) => ({ ...prevInput, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const existingData = JSON.parse(localStorage.getItem("userDetails")) || [];
      // Check for duplicate username or email
      const isDuplicate = existingData.some((user) => user.name === input.name || user.email === input.email);

      if (isDuplicate) {
        const duplicateField = existingData.some((user) => user.name === input.name) ? 'Username' : 'Email';
        const message = `${duplicateField}`;
        setExists(message);
        return;
      }
      const newUser = { ...input };
      // Update localStorage with the new user added to the array
      localStorage.setItem("userDetails", JSON.stringify([...existingData, newUser]));
      navigate("/");
    } catch (error) {
      console.error("Error storing user data:", error);
    }
  };

  return (
    <section className='container d-flex flex-column'>
      <h2 className="mt-4 text-white">Sign Up</h2>
      <form onSubmit={handleSubmit} className='mt-4'>
        <div className="mb-3">
          <input required type="text" className="form-control" name="name" value={input.name} onChange={handleChange} placeholder='User name'/>
          <span className="text-danger">{exists === "Username" ? "User name exists" : ""}</span>
        </div>

        <div className="mb-3">
          <input required type="email" className="form-control" name="email" value={input.email} onChange={handleChange} placeholder='E-mail'/>
          <span className="text-danger">{exists === "Email" ? "Email ID exists" : ""}</span>
        </div>

        <div className="mb-3">
          <input required type="password" className="form-control" name="password" value={input.password} onChange={handleChange} placeholder='Password'/>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Submit</button>
          <a className='ms-2 text-white text-decoration-none textHover' onClick={()=>{navigate("/")}}>already have an account: Login</a>
        </div>
      </form>
    </section>
  );
};
export default Signup;