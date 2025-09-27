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
module.exports = adminRoute;