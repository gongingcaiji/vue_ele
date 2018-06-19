var express = require('express');
var router = express.Router();
// var mongoCT = require('mongodb').MongoClient;
console.log(111);


/* GET users listing. */

router.post('/', function(req, res, next) {
    console.log(111122222);
    
    //app是库
    // var address = 'mongodb://127.0.0.1:27017/app';
    // mongoCT.connect(address,function(err,db){
    //     if(err){
    //         console.error(err);
            
    //     }else{
    //         // good是表
    //         var shoesdata = db.collection('good');
    //         shoesdata.find({}).toArray(function(err,result){
    //             res.send(result);
    //             db.close();
    //         })
    //         console.log();
            
    //     }
    // })
    let data=[{'usersname':'caishaodong','password':'123456'},{'usersname':'caidong','password':'789456'}];
    res.send(data);
});

module.exports = router;
