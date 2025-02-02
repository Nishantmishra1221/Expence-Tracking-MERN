import React, { useState } from 'react';
import styles from '../styles/AdminLogin.module.css';

function AdminLogin() {
    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
        const errors = {};

        if (!data.adminmail) {
            errors.adminmail = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.adminmail)) {
            errors.adminmail = 'Email is invalid';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }

        return errors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const validationErrors = validateForm(data);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                // Send a POST request to the login API
                const response = await fetch('http://localhost:5000/api/admin/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                    console.log('Login successful:', result);
                    alert('Login successful!');
                    event.target.reset(); // Clear the form
                } else {
                    console.error('Login failed:', result.message);
                    alert(`Login failed: ${result.message}`);
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div style={{ textAlign: 'center' }}>
                    <img src="vite.svg" alt="Admin" style={{ height: '80px', width: '80px' }} />
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="email">Admin Email:</label>
                    <input
                        type="email"
                        id="adminmail"
                        name="adminmail"
                        placeholder="Please enter your email"
                        className={errors.adminmail ? styles.invalid : ''}
                    />
                    {errors.adminmail && <p className={styles.error}>{errors.adminmail}</p>}

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Please enter your password"
                        className={errors.password ? styles.invalid : ''}
                    />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}

                    <div style={{ textAlign: 'center' }}>
                        <button type="submit" className={styles.loginButton}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;