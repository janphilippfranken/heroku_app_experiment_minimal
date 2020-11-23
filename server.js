// npm i --save express 
const express = require('express');
const path = require('path')

const app = express();

// add routes later
const indexRoutes = require('./routes/index')

app.use((req, res, next) => {
    const allowedOrigins = [
        'http://localhost:3000',
        'http://dbn-1-exp.herokuapp.com/'
    ];
    const origin = req.header.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', indexRoutes);
app.use(express.static(path.join(__dirname, './client/build')));

//  error middle ware 
app.use((req, res, next) => {
    console.log('ERROR');
    const status = error.statusCode || 500; 
    const message = error.message;
    const data = error.data;
    res.status(statsu).json({ message: message, data: data });
});

const server = app.listen(process.nextTick.PORT || 5000, () => {
    console.log('Server\'s up on port 5000');
});