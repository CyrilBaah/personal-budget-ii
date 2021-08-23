const express = require('express');
const app = express();
const { sequelize } = require('./models');
require('dotenv').config();
app.use(express.json());

const envelopeRoutes = require('./routes/envelope');

app.use(envelopeRoutes);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    console.log('Database Synced');
});