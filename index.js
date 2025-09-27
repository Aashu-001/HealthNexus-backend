const express = require('express');
const mongoose = require('mongoose');
const adminRoute = require('./Route/adminRoute');
const doctorRoute = require('./Route/doctorRoute');
const cors = require('cors');
const patientRoute = require('./Route/patientRoute');
const appRoute = require('./Route/appRoute');
const newsRoute = require('./Route/newsRoute');
const app = express();
const port = 8000;
mongoose.connect('mongodb://127.0.0.1:27017/healthnexus')
.then(()=>console.log("MongoDB Connected Success 👍"))
.catch((err)=>console.log(`Error 😮 :${err}`));

app.use(express.json());
app.use(cors({
    origin:["https://health-nexus-frontend.vercel.app/"]
}));
app.use('/api/admin',adminRoute);
app.use('/api/doctor',doctorRoute);
app.use('/api/patient',patientRoute);
app.use('/api/app',appRoute);
app.use('/api/news',newsRoute);
app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false
    })
})

app.listen(port,()=>console.log(`Server Running on Port : ${port} 🔥`));
