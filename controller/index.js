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
        if(envelope) {
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

exports.getUpdateEnvelopes = async (req, res) => {
    try {
        res.render('envelope/update', {
            title: 'Envelope Budgeting API',
            path: '/get-updateenvelope',
            pageName: 'Update an envelope',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.updateEnvelope = async (req, res) => {
    try {
        const { envelopeId, category, totalAmount, spendingLimit  } = req.body;
        const envelope = await Envelope.findOne({ where: { id: envelopeId } });
        if(envelope) {
            envelope.category = category;
            envelope.totalAmount = totalAmount;
            envelope.spendingLimit = spendingLimit;
            envelope.save();
            res.redirect('/get-envelopes');
        }
        return res.status(400).json({ success: false, message: `Envelope with id:${envelopeId} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.deleteEnvelope = async (req, res) => {
    try {
        const { envelopeId } = req.params;
        const envelope = await Envelope.findOne({ where: { id: envelopeId } });
        if(envelope) {
            envelope.destroy();
            res.redirect('/get-envelopes');
        }
        return res.status(400).json({ success: false, message: `Envelope with id:${envelopeId} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}