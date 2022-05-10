const express=require("express");
const router =new express.Router();
const MensRanking=require("../models/mens");

//we will handle post req
router.post("/mens",async(req,res)=>{
    try {
      const addMensRecord=new MensRanking(req.body);
      console.log(req.body);
      const insertMens=await addMensRecord.save();
      res.status(201).send(insertMens);
    } catch (error) {
        res.status(400).send(error);
    }
    })
    
    //we will handle get req
    router.get("/mens",async(req,res)=>{
        try {
         const getMen=await MensRanking.find({}).sort({"ranking":1});
          res.send(getMen);
        } catch (error) {
            res.status(400).send(error);
        }
        })
        //we will handle get req individual
    router.get("/mens/:id",async(req,res)=>{
        try {
         const _id=req.params.id;
         const getsMen=await MensRanking.findById({_id});
          res.send(getsMen);
        } catch (error) {
            res.status(400).send(error);
        }
        })
            //we will handle update req individual
    router.patch("/mens/:id",async(req,res)=>{
        try {
         const _id=req.params.id;
         const getMen=await MensRanking.findByIdAndUpdate(_id,req.body,{
             new:true
         });
          res.send(getMen);
        } catch (error) {
            res.status(500).send(error);
        }
        })
    //we will handle delete req individual
    router.delete("/mens/:id",async(req,res)=>{
        try {
         const getMen=await MensRanking.findByIdAndDelete(req.params.id);
          res.send(getMen);
        } catch (error) {
            res.status(500).send(error);
        }
        })
    
        module.exports=router;