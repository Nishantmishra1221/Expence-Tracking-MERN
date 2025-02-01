import React, { useState } from 'react';
import styles from '../styles/AdminLogin.module.css';

function AdminLogin() {
    const [errors, setErrors] = useState({}); // State to store validation errors

    const validateForm = (data) => {
        const errors = {};

        // Email validation
        if (!data.adminmail) {
            errors.adminmail = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.adminmail)) {
            errors.adminmail = 'Email is invalid';
        }

        // Password validation
        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 7) {
            errors.password = 'Password must be at least 7 characters long';
        }

        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Capture form data
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // Validate form data
        const validationErrors = validateForm(data);
        setErrors(validationErrors);

        // If there are no errors, proceed with submission
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data:', data);

            // Example: Send data to an API
            // fetch('/api/admin/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data),
            // })
            // .then(response => response.json())
            // .then(result => {
            //     console.log('Success:', result);
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            // });

            // Clear the form after successful submission
            event.target.reset();
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
                        required
                    />
                    {errors.adminmail && <p className={styles.error}>{errors.adminmail}</p>}

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Please enter your password"
                        required
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