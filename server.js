// const cors = require('cors');
const express = require('express');
const { dbConnection } = require('./config/db');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

dbConnection();

// app.use(cors());

app.use(express.json());

app.use('/api/employees', require('./routes/employeeRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(port, () => console.log(`Server running on port ${port}`));  