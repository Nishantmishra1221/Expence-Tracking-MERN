import React from 'react'
import styles from '../styles/AdminLogin.module.css';

function AdminLogin() {
    return (
        <div className={styles['container']}>
            <div className={styles.card}>
                <div style={{ textAlign: 'center' }} ><img src="vite.svg" alt="Admin" /></div>
                <form className={styles.form}>
                    <label htmlFor="email">Admin Email:</label>
                    <input type="mail" id="adminmail" name="adminmail" placeholder='Admin email' />
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password" />
                </form>
            </div>
        </div>
    )
}

export default AdminLogin;