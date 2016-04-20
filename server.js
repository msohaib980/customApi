'use strict';

const PORT = process.env.PORT || 3000;


// var twitterKey =process.env.TWITTER_secret;

var http = require('http');
var fs = require('fs');
var md5 = require('md5');


var server = http.createServer((req, res) => {

  var params = req.url.split('/');
  // console.log(params);
  params.shift(); // throwing out the empty string
  var resource = params.shift().toLowerCase();
  // console.log(params);
  switch (resource) {

    case 'math':
      require('./math.js')(params, res);
      res.end();
      break;

    case 'gravatar':
      var hasheemail = md5(params[0]);
      console.log('hasheemail', hasheemail);
      res.write(`${hasheemail}`);
      res.end();

    case '':
        var data = fs.readFileSync('./public/index.html');
        res.end(data.toString());
      break;
    default:
    fs.readFile(`./public/${resource}`,(err,data)=>{

      if(err){
        res.statusCode = 404;
        res.write('Not Found');
        res.end('\n')
      }else{
        console.log("hit");
        res.end(data.toString())
      }
    });
  }
});

server.listen(PORT, function(err) {
  if(err) return console.log('error!:', err);
  console.log(`Node server listening on port ${PORT}`);
});
