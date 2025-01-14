const express = require('express');
const cors = require('cors');
const path = require('path');
const weatherRoutes = require('./routes/weatherRoutes');
require('dotenv').config();
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', weatherRoutes);
app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'map.html'));
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/map`);
});
