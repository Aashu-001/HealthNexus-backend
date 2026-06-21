const express = require('express');
const enquiryModel = require('../Model/enquiryModel');
const enquiryRoute = express.Router();

enquiryRoute.get('', async (req, res) => {
    try {
        const enquiries = await enquiryModel.find();
        res.json({ msg: 'Success', value: enquiries });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

enquiryRoute.post('', async (req, res) => {
    try {
        await enquiryModel.create(req.body);
        res.json({ msg: 'Success' });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

module.exports = enquiryRoute;
