var express = require('express');
var router = express.Router();


/* GET users listing. */

router.post('/', function(req, res, next) {
    let data=[{'usersname':'caishaodong3','password':'123456','usersname':'caishaodong4','password':'123456','usersname':'caishaodong5','password':'123456'}];
    res.send(data);
});

module.exports = router;