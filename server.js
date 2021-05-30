const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const jwt = require('jsonwebtoken');
const compression = require('compression');
const dbConnect = require('./db/connection');
const routes = require('./routes');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const runServer = app => {
    app.use(cors());
    app.use(helmet());
    app.use(compression());
    app.use(express.json());
    app.use(express.static('build'));
    app.use('/api/v1', routes);

    app.get('/test', (req, res) => {
        return res.send('pong')
    });

    app.post('/test', (req, res) => {
        console.log('body: ', req.body);
        return res.status(200).json({
            success: true,
            data: req.body
        })
    });

    app.get('/', (req, res) => {
        // console.log('path: ', path.join(__dirname, 'build', 'index.html'))
        // res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

    app.listen(PORT, () => {
        dbConnect();
        console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode ....`);
    });
}

module.exports = {
    runServer
}

/**
 * Password in encrypt form
 * verify and sign new one
 */