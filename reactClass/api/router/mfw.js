var express=require("express")
var router = express.Router();
const indexData=require("../data/index_data.js")

/* GET users listing. */
router.get('/index', function(req, res, next) {
  res.send(JSON.stringify(indexData));
});

var userlist=[{user:"15098950322",pw:"123456"},{user:"15098950321",pw:"12345s"}]
router.get('/login_common', function(req, res, next) {
  const {user,pw}=req.body
  userlist.forEach((i)=>{
    if(i.user==user){
      if(i.pw==pw){
        res.send({
          code:"1001",
          msg:"ok"
        })
      }else{
        res.send({
          code:"1002",
          msg:"密码错误"
        })
      }
    }else{
        res.send({
          code:"1003",
          msg:"用户不存在"
        })
    }
  })
});

var codelist=[]
// 获取默认验证码
router.get('/get_code', function(req, res, next) {
  var randomcode="";
  for(var i=0;i<=3;i++){
    randomcode+=Math.floor(Math.random()*10)
  }
  codelist.push(randomcode)
  res.send({
    code:"1100",
    data:randomcode
  });
});

var phoneCodeList=[]
// 获取手机号验证码
router.get('/get_phonecode', function(req, res, next) {
  const {phone,code}=req.query
 
  let phonecode=""
  if(codelist.includes(code)){
    codelist=codelist.filter(function(i){
        return i!=code
    })
    console.log(codelist)
    for(var i=0;i<=5;i++){
      phonecode+=Math.floor(Math.random()*10)
    }
    phoneCodeList.push({phone,code:phonecode})
    // 调用发送验证码的另外一个程序
    res.send({
      code:"1101",
      data:phonecode
    });
  }else{
    res.send({
      code:"1102",
      data:"验证失败"
    });
  }
});



// 验证码登录验证
router.get('/login_code', function(req, res, next) {
  const {phone,phoneCode}=req.query
    var $index=null
    if(phoneCodeList.length==0){
      res.send({
        code:"1202",
        msg:"验证码错误",
        data:null
      });
    }
    phoneCodeList.forEach((i,index)=>{
        if(i.phone==phone){
          if(i.code==phoneCode){
            phoneCodeList.splice(index,1)
            res.send({
              code:"1201",
              msg:"验证成功",
              data:1
            });
          }else{
            res.send({
              code:"1202",
              msg:"验证码错误",
              data:null
            });
          }
        }else{
          res.send({
            code:"1203",
            msg:"验证码错误",
            data:null
          });
        }
    })
});



// 酒店数据
var hotellist= require("../data/data_addtess.js")
router.get('/get_hotel', function(req, res, next) {
  const {address,startDate,endDate}=req.query
    if(address&&startDate&&endDate){
      var data=hotellist.filter((i)=>{
        
        return i.name==address
        
      })
      res.send(data)
    }
});


router.get('/get_location', function(req, res, next) {
  const {ip}=req.query
  
});

var fetch=require("node-fetch")
router.get('/getnode', function(req, res, next) {
   fetch("http://back.cygdream.com/api/back_class/class_list").then((data)=>{
     
      return data.json()
     
   }).then((data)=>{
      console.log(data)
      res.send(data)
   })
});

module.exports=router