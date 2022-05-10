const express=require("express");
require("../src/db/conn");


const MensRanking=require("../src/models/mens");
const router = require("./routers/men");
const app= express();
const port =process.env.PORT || 3000;

app.use(router);

app.use(express.json());


app.listen(port,()=>{
    console.log(`connection is live at port no ${port}`);
})