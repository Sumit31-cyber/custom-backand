const express = require('express')
const router = new express.Router();
const MensRanking = require("../models/mens");

// posting user data using postman in mongoDB
router.post("/mens",async (req, res)=>{ 
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body)
        const isnertMens = await addingMensRecords.save();
        res.status(201).send(isnertMens)
    }catch(e){
        console.log(e.message)
       res.status(400).send(e)
    }
})
router.get("/mens",async (req, res)=>{
    try{
      const getMens = await MensRanking.find({}).sort({"ranking" : 1});
        res.send(getMens)
    }catch(e){
        console.log(e.message)
       res.status(400).send(e)
    }
})
// we will handle get req for individual data
router.get("/mens/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
      const getMen = await MensRanking.findById({_id});
        res.send(getMen)
    }catch(e){
        console.log(e.message)
       res.status(400).send(e)
    }
})
// we eill handle patch req of individual
router.patch("/mens/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
      const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
          new : true
      });
        res.send(getMen)
    }catch(e){
        console.log(e.message)
       res.status(500).send(e)
    }
})
//we will handle delete user
router.delete("/mens/:id",async (req, res)=>{
    try{
        const _id = req.params.id;
      const getMen = await MensRanking.findByIdAndDelete(_id);
        res.send(getMen)
    }catch(e){
        console.log(e.message)
       res.status(500).send(e)
    }
})

module.exports = router;