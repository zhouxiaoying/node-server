//入口文件
//起一个服务
const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors")
const uploadrouter = require("./routes/upload")

app.use(cors())

//添加路由
app.use("/upload",uploadrouter)

app.get("/",(req,res)=>{
    res.send("hello");
})
app.get("/123",(req,res)=>{
    res.send("hello123");
})
//静态文件
app.use(express.static("public"))



app.listen(38086,()=>{
    console.log('Server on 38086');
})
