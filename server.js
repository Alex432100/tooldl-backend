const express = require('express');
const cors    = require('cors');
const path    = require('path');
const dotenv  = require('dotenv');
const downloadRoutes = require('./routes/downloadRoutes');

dotenv.config();

const app = express();

// 1) API middleware
app.use(cors());
app.use(express.json());
app.use('/api/download', downloadRoutes);

// 2) Serve React’s build folder as static
//    (assumes your client build is in ../client/build or in ./build)
app.use(express.static(path.join(__dirname, 'build')));

// 3) SPA fallback: for any route *not* starting with /api, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend + SPA running on http://localhost:${PORT}`);
});
