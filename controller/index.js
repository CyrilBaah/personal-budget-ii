const express = require('express');
const app = express();

exports.getHomePage = async (req, res) => {
    res.render('envelope/index', {
        title: 'Envelope Budgeting API',
        path: '/index',
        pageName: 'Create an envelope'
    });
}

exports.getEnvelopes = async (req, res) => {
    res.render('envelope/get', {
        title: 'Envelope Budgeting API',
        path: '/get',
        pageName: 'Get all envelopes'
    });
}