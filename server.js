require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const employeeRoutes = require('./routes/employees');

app.use(cors());
app.use(express.json());
app.use('/api/employees', employeeRoutes);

app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
});
