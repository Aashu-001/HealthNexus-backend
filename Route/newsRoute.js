// const express = require('express')
// const newsRoute = express.Router();

// newsRoute.get('',async (req,res)=>{
//     try {
//         const news = await newsModel.find();
//         res.json({"msg":"Success","value":news});
//     } catch (error) {
//         res.json({"msg":erros})
//     }
// })

// newsRoute.post('',async (req,res)=>{
//     try {
//         const news = await newsModel.create(req.body);
//         res.json({"msg":"Success"});
//     } catch (error) {
//         res.json({"msg":erros})
//     }
// })

// newsRoute.put('/:id',async (req,res)=>{
//     try {
//         const id = req.params.id;
//         await newsModel.findByIdAndUpdate(id,req.body);
//         res.json({"msg":"Success"});
//     } catch (error) {
//         res.json({"msg":erros})
//     }
// })

// newsRoute.delete('/:id',async (req,res)=>{
//     try {
//         const id = req.params.id;
//         await newsModel.findByIdAndDelete(id);
//         res.json({"msg":"Success"});
//     } catch (error) {
//         res.json({"msg":erros})
//     }
// })

// module.exports = newsRoute;

const express = require('express');
const newsModel = require('../Model/newsModel');
const newsRoute = express.Router();

newsRoute.get('', async (req, res) => {
    try {
        const news = await newsModel.find();
        res.json({ "msg": "Success", "value": news });
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ "msg": "Server Error" });
    }
});

newsRoute.post('', async (req, res) => {
    try {
        const news = await newsModel.create(req.body);
        res.status(201).json({ "msg": "Success", "value": news });
    } catch (error) {
        console.error("Error creating news:", error);
        res.status(500).json({ "msg": "Server Error" });
    }
});

newsRoute.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedNews = await newsModel.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ "msg": "Success", "value": updatedNews });
    } catch (error) {
        console.error("Error updating news:", error);
        res.status(500).json({ "msg": "Server Error" });
    }
});

newsRoute.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await newsModel.findByIdAndDelete(id);
        res.json({ "msg": "Success" });
    } catch (error) {
        console.error("Error deleting news:", error);
        res.status(500).json({ "msg": "Server Error" });
    }
});

module.exports = newsRoute;
