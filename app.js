const express = require('express');
const app = express();
const { sequelize } = require('./models');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Personal Budget II",
            version: "1.0.0",
            description: "An API that allows clients to create and manage a personal budget using Envelope Enveloping Budgeting"
        },
        servers: [
            {
                url: "http://localhost:3000"
            },
        ],
    }
}

const options = {
    swaggerDefinition,
    apis: ["./controller/api/envelope.js", "./controller/api/transaction.js"]
};

const swaggerSpecification = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecification));


const envelopeRoutes = require('./routes/envelope');
const transactionRoutes = require('./routes/transaction');
const indexRoutes = require('./routes/index');

app.use(envelopeRoutes);
app.use(transactionRoutes);
app.use(indexRoutes);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    console.log('Database Synced');
});