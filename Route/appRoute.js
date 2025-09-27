const express = require('express');
const appModel = require('../Model/appModel');
const appRoute = express.Router();

appRoute.post('',async(req,res)=>{
    try {
        await appModel.create(req.body);
        res.json({"msg":"Success"});
    } catch (error) {
        res.json({"msg":error});
    }
})

appRoute.get('',async(req,res)=>{
    try {
        const app = await appModel.find().populate("pid").populate("did");
        res.json({"msg":"Success","value":app});
    } catch (error) {
        res.json({"msg":error});
    }
})

appRoute.put('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        await appModel.findByIdAndUpdate(id,req.body);
        res.json({"msg":"Success"});
    } catch (error) {
        res.json({"msg":error});
    }
})

appRoute.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        await appModel.findByIdAndDelete(id);
        res.json({"msg":"Success"});
    } catch (error) {
        res.json({"msg":error});
    }
})

appRoute.get('/p/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const app = await appModel.find({pid:id}).populate("pid").populate("did");
        res.json({"msg":"Success","value":app});
    } catch (error) {
        res.json({"msg":error});
    }
})

appRoute.get('/d/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const app =await appModel.find({did:id}).populate("pid").populate("did");
        res.json({"msg":"Success","value":app});
    } catch (error) {
        res.json({"msg":error});
    }
})

appRoute.get('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const app = await appModel.findById(id).populate("pid").populate("did");
        res.json({"msg":"Success","value":app});
    } catch (error) {
        res.json({"msg":error});
    }
})

module.exports = appRoute;