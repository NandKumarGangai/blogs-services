const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const jwt = require('jsonwebtoken');
const compression = require('compression');
const dbConnect = require('./db/connection');
const routes = require('./routes');
const fs = require('fs');

require('dotenv').config();
global.__basedir = __dirname;

const PORT = process.env.PORT || 8000;

const runServer = app => {
    app.use(cors());
    app.use(helmet());
    app.use(compression());
    app.use(express.json());
    app.use(express.static('dist'));
    app.use(express.static('uploads'));
    app.use('/api/v1', routes);

    app.get('/test', async (req, res) => {
        const isProduction = process.env.NODE_ENV === 'PRODUCTION';
        const hostname = require("os").hostname();
        const URL = `${isProduction ? 'https' : 'http'}://${hostname}:${process.env.PORT}/`;

        const getFilesList = async () => {
            const uploadDirPath = path.resolve("./uploads/");

            await fs.readdir(uploadDirPath, function (err, files) {
                let filesList = [];
                
                files.forEach((file) => {
                    filesList.push({
                        name: file,
                        url: `/${file}`,
                    });
                });
                
                res.send(filesList);
            });
        };
        return await getFilesList();
    });

    app.post('/test', (req, res) => {
        console.log('body: ', req.body);
        return res.status(200).json({
            success: true,
            data: req.body
        })
    });

    app.get('/', (req, res) => {
        console.log('path: ', path.join(__dirname, 'dist', 'index.html'))
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
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