const express = require('express');
const cors = require('cors');

const routes = require('./services/route.service');

const port = '8080';

const app = express(); // create instance of express - function()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', routes);

app.listen(port, () => {console.log(`listen on ${port}`)});


module.exports = app;