import {React, useState} from 'react'
import './Validation.css'

function Validation() {

  const [formData, setFormData] = useState({
    username : "",
    email : "",
    password : "",
    confirmPassword : ""
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    let newErrors = {}

    if (formData.username.trim().length < 3) 
      newErrors.username = "Username must be at least 3 characters"; 
    
    if (!formData.email.includes("@") || !formData.email.includes(".")) 
      newErrors.email = "Invalid email address"
    
    if (formData.password.length < 6) 
      newErrors.password = "Password must be at least 6 characters"
    
    if (formData.confirmPassword !== formData.password) 
      newErrors.confirmPassword = "Passwords do not match"

    return newErrors;
  }

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const validationErrors = validate(); 
    setErrors(validationErrors); 
    if (Object.keys(validationErrors).length === 0) { 
      alert("Form submitted successfully!"); 
    } 
  }

  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData((prev) => ({ ...prev, [name]: value })); 
  } 

  return (

    <div className="form-container">

    <h2>Form Validation</h2>

      <h2>Register</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </label>
        </div>

        <div className="form-group">
          <label>Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
        </div>

        <div className="form-group">
          <label>Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span
              className="error">{errors.password}</span>}
          </label>
        </div>

        <div className="form-group">
          <label>Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Validation