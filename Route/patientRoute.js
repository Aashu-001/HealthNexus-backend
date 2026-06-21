const express = require('express');
const patientModel = require('../Model/patientModel');
const patientRoute = express.Router();

const getPatientErrorMessage = (error) => {
    if (error.code === 11000) {
        return 'Email already exists';
    }

    if (error.name === 'ValidationError') {
        return Object.values(error.errors)
            .map((item) => item.message)
            .join(', ');
    }

    return error.message || 'Something went wrong';
};

patientRoute.get('',async (req,res)=>{
    try {
        const patient = await patientModel.find();
        res.json({"msg":"Success","value":patient})
    } catch (error) {
        res.status(500).json({"msg":getPatientErrorMessage(error)});
    }
});
patientRoute.get('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const patient = await patientModel.findById(id);
        res.json({"msg":"Success","value":patient})
    } catch (error) {
        res.status(500).json({"msg":getPatientErrorMessage(error)});
    }
});
patientRoute.post('',async (req,res)=>{
    try {
        await patientModel.create(req.body);
        res.json({"msg":"Success"})
    } catch (error) {
        res.status(400).json(error);
    }
})

patientRoute.post('/log',async (req,res)=>{
    try {
        const {email,password} = req.body;
        const ad =await  patientModel.findOne({email});
        if(!ad){
            res.json({"msg":"Not Found"});
        }
        else{
            if(ad.password == password){
            res.json({"msg":"Success","id":ad._id});
            }
            else{
                res.json({"msg":"Something Went Wrong"});
            }
        
        }
        
    } catch (error) {
        res.status(500).json({"msg":getPatientErrorMessage(error)});
    }
    
})

patientRoute.put('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        await patientModel.findByIdAndUpdate(id,req.body,{ runValidators:true });
        res.json({"msg":"Success",})
    } catch (error) {
        res.status(400).json({"msg":getPatientErrorMessage(error)});
    }
})

patientRoute.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        await patientModel.findByIdAndDelete(id);
        res.json({"msg":"Success"})
    } catch (error) {
        res.status(500).json({"msg":getPatientErrorMessage(error)});
    }
})

module.exports = patientRoute;
