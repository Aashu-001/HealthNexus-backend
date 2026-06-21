const mongoose = require('mongoose');

const enquirySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const enquiryModel = mongoose.model('enquiry', enquirySchema);
module.exports = enquiryModel;
