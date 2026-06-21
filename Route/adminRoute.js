const express = require('express');
const adminModel = require('../Model/adminModel');
const adminRoute = express.Router();

adminRoute.get('',(req,res)=>{
    res.end("Hello");
})
adminRoute.post('/log',async (req,res)=>{
    try {
        const {email,password} = req.body;
        const ad =await  adminModel.findOne({email});
        console.log(ad);
        if(!ad){
            res.json({"msg":"Not Found"});
        }
        else{
            if(ad.password == password){
            res.json({"msg":"Success"});
            }
            else{
                res.json({"msg":"Something Went Wrong"});
            }
        
        }
        
    } catch (error) {
        res.json({"msg":error});
    }
    
})

adminRoute.post('/reg',async(req,res)=>{
     const {email,password} = req.body;
     const adm = adminModel.create({email,password});
     if(!adm){
        res.json({"msg":"Something went wrong"});
     }
     res.json({"msg":"Success"})
})
module.exports = adminRoute;