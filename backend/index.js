const express=require('express')
const app=express()
const port=5000
const path=require("path")
const mongoDB=require('./db')
mongoDB();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  })
);
app.get('*',(req,res)=>{
    // res.send('Hello World')
    res.sendFile(path.resolve("build","index.html"))
})
app.use(express.static('build'));
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})






app.use(express.json());
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.listen(port,()=>{
console.log(`Example app listening on port ${port}`)
})