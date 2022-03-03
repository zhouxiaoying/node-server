const express = require("express")
const router = express.Router()
var multer = require('multer');
var fs = require('fs');
var path = require('path');

//查询文件的路由
router.get('/', function (req, res, next) {

    //读取upload文件夹下的内容
    fs.readdir(path.join(__dirname,"../upload"),function(err,files){
        console.log(err);
        if(err){
            res.send(false)
            return
        }
        let arr = []
        files.forEach(function(item){
            console.log(item);
        })
        res.send(files);
    })
    // res.send('用户首页');
});



//上传
router.post('/upload',multer({ dest: '../upload' }).any(),function(req,res,next){
    let file = req.files[0]
  //拼装文件名称
  let filename = file.originalname
  let des_file = path.join(__dirname,"../upload/")+filename
  let down_file = path.join(__dirname,"../public/download/"+filename)
    fs.readFile(file.path,"utf8",(err, data) => {
        fs.writeFile(des_file,data,(err)=>{
            if(err){
                res.send("上传失败")
                return
            }
            fs.writeFile(down_file,filename,(err)=>{
                if(err){
                    res.send("上传失败")
                    return
                }
            res.send("上传成功")
            })
            // res.redirect(200,'/index.html')
        })
    });

})

//下载
router.get('/down',function(req,res,next){
    //接收文件名称
  let {fn} = req.query
  //如果参数中有中文，需要解码
  fn = decodeURI(fn)
  
})


//导出该路由
module.exports = router;