const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');

dns.setServers(['1.1.1.1','8.8.8.8'])
const adminRoute = require('./Route/adminRoute');
const doctorRoute = require('./Route/doctorRoute');
const patientRoute = require('./Route/patientRoute');
const appRoute = require('./Route/appRoute');
const newsRoute = require('./Route/newsRoute');
const feedbackRoute = require('./Route/feedbackRoute');
const enquiryRoute = require('./Route/enquiryRoute');

const app = express();
const port = process.env.PORT || 8000;
const mongoUri = process.env.MONGODB_URI ;

mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log(`MongoDB connection error: ${err.message}`));

app.use(express.json());
app.use(cors({
    origin: [
        'https://health-nexus-frontend.vercel.app',
        'http://localhost:5173',
        process.env.FRONTEND_URL
    ].filter(Boolean)
}));

app.use('/api/admin', adminRoute);
app.use('/api/doctor', doctorRoute);
app.use('/api/patient', patientRoute);
app.use('/api/app', appRoute);
app.use('/api/news', newsRoute);
app.use('/api/feedback', feedbackRoute);
app.use('/api/enquiry', enquiryRoute);

app.get('/', (req, res) => {
    res.send({
        activeStatus: true,
        error: false
    });
});

if (require.main === module) {
    app.listen(port, () => console.log(`Server running on port: ${port}`));
}

module.exports = app;
