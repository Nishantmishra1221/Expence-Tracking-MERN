//fix for using require in react
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require('express');
const mongoose = require('mongoose');
const Admin = require('../database/models/Admin'); // Import the Admin model
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/adminDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Login endpoint
app.post('/api/admin/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the admin by email
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await admin.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // If everything is valid, return a success response
        res.status(200).json({ message: 'Login successful', admin });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});