const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const downloadRoutes = require('./routes/downloadRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/download', downloadRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true,
}));
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
