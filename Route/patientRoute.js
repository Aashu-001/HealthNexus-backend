const express = require('express');
const patientModel = require('../Model/patientModel');
const patientRoute = express.Router();

patientRoute.get('',async (req,res)=>{
    try {
        const patient = await patientModel.find();
        res.json({"msg":"Success","value":patient})
    } catch (error) {
        res.json({"msg":error});
    }
});
patientRoute.get('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const patient = await patientModel.findById(id);
        res.json({"msg":"Success","value":patient})
    } catch (error) {
        res.json({"msg":error});
    }
});
patientRoute.post('',async (req,res)=>{
    try {
        await patientModel.create(req.body);
        res.json({"msg":"Success"})
    } catch (error) {
        res.json({"msg":error});
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
        res.json({"msg":error});
    }
    
})

patientRoute.put('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        await patientModel.findByIdAndUpdate(id,req.body);
        res.json({"msg":"Success",})
    } catch (error) {
        res.json({"msg":error});
    }
})

patientRoute.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        await patientModel.findByIdAndDelete(id);
        res.json({"msg":"Success"})
    } catch (error) {
        res.json({"msg":error});
    }
})

module.exports = patientRoute;