const express = require("express");

const {checkMiddleware, schema } = require('../services/validation.service');
const app = express.Router();

app.route("/")
    .post(schema(), checkMiddleware, (req, res) => {
        res.send().status(200);
    });
module.exports = app;
