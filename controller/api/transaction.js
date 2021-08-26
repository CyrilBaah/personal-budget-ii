const express = require('express');
const app = express();
const { Transaction, Envelope } = require('../../models');
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

exports.getTransaction = async (req, res) => {
    try {
        const transactions = await Transaction.findAll({ include: 'envelopes' });
        res.status(200).json({ success: true, message: transactions });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, paymentAmount, paymentRecipient, envelopeId } = req.body;
        const transaction = await Transaction.findOne({ where: { id } });
        if (transaction) {
                transaction.description = description;
                transaction.paymentAmount = paymentAmount;
                transaction.paymentRecipient = paymentRecipient;
                transaction.envelopeId = envelopeId;
                transaction.save();
            return res.status(201).json({ success: true, message: transaction });
        }
        return res.status(400).json({ success: false, message: `Transaction with id:${envelopeId} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

exports.deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findOne({ where: { id } });
        if (transaction) {
            transaction.destroy();
            return res.status(204).json({ success: false, message: `Transaction with id:${id} doesn't exist` });
        }
        return res.status(400).json({ success: false, message: `Transaction with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}