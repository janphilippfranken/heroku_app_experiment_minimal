const path = require('path');
const express = require('express');

const app = express();


//  adding routes
const indexRoutes = require('./routes/index');

app.use((req, res, next) => {
    const allowedOrigins = [
        'http://localhost:3000',
        'http://reactjs-bare-minimum.herokuapp.com'
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

// routes
app.use('/', indexRoutes);
app.use(express.static(path.join(__dirname, './client/build')));

// ERROR MIDLEWARE
app.use((error, req, res, next) => {
    console.log('ERROR');
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Server\'s up on port 5000!');
});