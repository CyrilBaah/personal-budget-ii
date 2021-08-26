const express = require('express');
const app = express();
const { Envelope } = require('../../models');
app.use(express.json());


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
        return res.status(201).json({ success: true, message: envelope });
        }
        return res.status(400).json({ success: false, message: `Envelope with Category Name:${category} already exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}

/**
 * @swagger
 * /api/envelopes:
 *    get:
 *      summary: Get all enveloppes
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      responses:
 *        "200":
 *          description: Returns a list of all envelopes
 *
 */
exports.getAllEnvelope = async (req, res) => {
    try {
        const envelopes = await Envelope.findAll();
        res.status(200).json({ success:true, message: envelopes });
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: error });
    }
}

exports.updateEnvelope = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, totalAmount, spendingLimit } = req.body;
        const envelope = await Envelope.findOne({ where: { id } });
        if(envelope) {
            envelope.category = category;
            envelope.totalAmount = totalAmount;
            envelope.spendingLimit = spendingLimit;
            envelope.save();
            return res.status(201).json({ success: true, message: envelope });
        }
        return res.status(400).json({ success: false, message: `Envelope with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: error });
    }
}

exports.deleteEnvelope = async (req, res) => {
    try {
        const { id } = req.params;
        const envelope = await Envelope.findOne({ where: { id } });
        if(envelope) {
            envelope.destroy();
            return res.status(204).json({ success: true, message: envelope });
        }
        return res.status(400).json({ success: false, message: `Envelope with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: error });
    }
}

exports.withdrawFromEnvelope = async (req, res) => {
   try {
        const { id, amount } = req.params;
        const envelope = await Envelope.findOne({ where: { id } });
        if(envelope) {
            envelope.totalAmount -= amount;
            envelope.save()
            return res.status(200).json({ success: true, message: envelope });
        } 
        return res.status(400).json({ success: false, message: `Envelope with id:${id} doesn't exist` });
   } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: error });
   }
}

exports.depositToEnvelope = async (req, res) => {
    try {
        const { id, amount } = req.params;
        const envelope = await Envelope.findOne({ where: { id } });
        if(envelope) {
            envelope.totalAmount += Number(amount);
            envelope.save()
            return res.status(200).json({ success: true, message: envelope });
        } 
        return res.status(400).json({ success: false, message: `Envelope with id:${id} doesn't exist` });
   } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: error });
   }
}