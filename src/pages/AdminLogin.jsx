import React from 'react'
import styles from '../styles/AdminLogin.module.css';

function AdminLogin() {
    const formData = new FormData(document.querySelector('form'));
    console.log(Object.fromEntries(formData));
    return (
        <div className={styles['container']}>
            <div className={styles.card}>
                <div style={{ textAlign: 'center' }} ><img src="vite.svg" alt="Admin" style={{ height: '80px', width: '80px' }} /></div>
                <form className={styles.form}>
                    <label htmlFor="email">Admin Email:</label>
                    <input type="mail" id="adminmail" name="adminmail" placeholder='Please enter your email' />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='Please enter your password' />
                </form>
                <div style={{ textAlign: 'center' }}><button className={styles.loginButton}>Login</button></div>
            </div>
        </div>
    )
}

export default AdminLogin;