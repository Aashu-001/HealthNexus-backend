const express = require('express');
const feedbackModel = require('../Model/feedbackModel');
const feedbackRoute = express.Router();

feedbackRoute.get('', async (req, res) => {
    try {
        const feedback = await feedbackModel.find();
        res.json({ msg: 'Success', value: feedback });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

feedbackRoute.post('', async (req, res) => {
    try {
        await feedbackModel.create(req.body);
        res.json({ msg: 'Success' });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

module.exports = feedbackRoute;
