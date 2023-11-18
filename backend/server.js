require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const WebRoutes = require('./routes/to-do-list');

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/to-do', WebRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Listening on port ', process.env.PORT)
    })
}).catch((error) => {
    console.log(error)
})