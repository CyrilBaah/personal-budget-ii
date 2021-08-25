const express = require('express');
const app = express();
const { Envelope } = require('../models');

exports.getHomePage = async (req, res) => {
    res.render('envelope/index', {
        title: 'Envelope Budgeting API',
        path: '/index',
        pageName: 'Create an envelope'
    });
}

exports.createEnvelope = async (req, res) => {
    try {
        const { category, totalAmount, spendingLimit } = req.body;
        const envelope = Envelope.findOne({ where: { category: category} });
        if(!envelope) {
            const envelope = await Envelope.create({
                category,
                totalAmount,
                spendingLimit
            });
            res.redirect('/');
        }
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.getEnvelopes = async (req, res) => {
    try {
        const envelopes = await Envelope.findAll();
        res.render('envelope/get', {
            title: 'Envelope Budgeting API',
            path: '/get',
            pageName: 'Get all envelopes',
            envelopes: envelopes
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}