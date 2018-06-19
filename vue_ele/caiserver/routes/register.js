// var express = require('express');
// var router = express.Router();
// var mongoCT = require('mongodb').MongoClient;

// /* GET users listing. */
// router.post('/', function(req, res, next) {
//     //app是库
//     var address = 'mongodb://127.0.0.1:27017/app';
//     mongoCT.connect(address,function(err,db){
//         if(err){
//             console.error(err);
            
//         }else{
//             console.log(654987);
            
//             // good是表
//             var shoesdata = db.collection('good');
//             //模拟拿到库的数据
//             let data = [{'aa123':123456},{'bb123':456789}]
//             data.map(function(item){
//                 if(req.body.username==item.username){
//                     res.send('fail')
//                 }else{
//                     res.send('success')
//                 }
//             })
            
//             // shoesdata.find({}).skip(2).toArray(function(err,result){

//             //     res.send(result);
//             // db.close();
//             // })
//             // console.log();
            
//         }
//     })
// });

// module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('777797233213');
});

module.exports = router;
