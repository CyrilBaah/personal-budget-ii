const express = require('express');
const app = express();

exports.getHomePage = async (req, res) => {
    res.render('index', {
        title: 'Envelope Budgeting API',
        path: '/index'
    });
}