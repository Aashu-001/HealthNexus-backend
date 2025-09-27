const express = require('express');
const doctorModel = require('../Model/doctorModel');
const doctorRoute = express.Router();
doctorRoute.get('',async(req,res)=>{
    try {
        const doc = await doctorModel.find();
        res.json({"msg":"Success","value":doc});
    } catch (error) {
        res.json({"msg":error});
    }
})
doctorRoute.get('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const doc = await doctorModel.findById(id);
        return res.json({"msg":"Success","value":doc})
    } catch (error) {
        return res.json({"msg":error})
    }
})
doctorRoute.post('',async(req,res)=>{
    try {
        await doctorModel.create(req.body);
        res.json({"msg":"Success"})
        
    } catch (error) {
        res.json({"msg":error})
    }
})

doctorRoute.post('/log',async (req,res)=>{
    try {
        const {email,password} = req.body;
        const ad =await  doctorModel.findOne({email});
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

doctorRoute.put('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        await doctorModel.findByIdAndUpdate(id,req.body);
        res.json({"msg":"Success"})
    } catch (error) {
        res.json({"msg":error})
    }
})
doctorRoute.delete('/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        await doctorModel.findByIdAndDelete(id);
        res.json({"msg":"Success"})
    } catch (error) {
        res.json({"msg":error});
    }
})

module.exports = doctorRoute;