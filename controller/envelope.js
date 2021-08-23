const express = require('express');
const app = express();
const { Envelope } = require('../models');
app.use(express.json());

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
        return res.status(201).json({ success: true, message: envelope });
        }
        return res.status(400).json({ success: false, message: `Envelope with Category Name:${category} already exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.getAllEnvelope = async (req, res) => {
    try {
        const envelopes = await Envelope.findAll();
        res.status(200).json({ success:true, message: envelopes })
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: error });
    }
}
