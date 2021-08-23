const express = require('express');
const app = express();
const { Transaction, Envelope } = require('../models');
app.use(express.json());

exports.createTransaction = async (req, res) => {
    try {
        const { description, paymentAmount, paymentRecipient, envelopeId } = req.body;
        const envelope = await Envelope.findOne({ where: { id: envelopeId} });
        if(envelope) {
            const transaction = await Transaction.create({
                description,
                paymentAmount,
                paymentRecipient,
                envelopeId
            });
            return res.status(201).json({ success: true, message: transaction });
        }
        return res.status(400).json({ success: false, message: `Transaction with id:${envelopeId} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

