var express = require('express');
var router = express.Router();
const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000, function() {
  console.log('Example app is running on port 3000!');
});

module.exports = router;

