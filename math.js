'use strict'
module.exports = function(params,res){
  // var params = req.url.split('/');
  // console.log(params);
  var task = params.shift();
  console.log(task);
  switch(task) {
    case 'square':
      var num = params[0];
      var square = Math.pow(num, 2);
      res.write(`${square}`);
      break;
    case 'cube':
      var num = params[0];
      var cube = Math.pow(num, 3);
      res.write(`${cube}`);
      break;
    case 'pow':
      var base = params[0];
      var exponent = params[1];
      var pow = Math.pow(base, exponent);
      res.write(`${pow}`);
      break;
    case 'div':
      var num = Number(params[0]);
      var diveder =Number(params[1]);
      var div = num/diveder;
      console.log(div);
      res.write(`${div}`);
      break;
    case 'sum':
      var sum = params.reduce((acc, num) => {
        return acc + parseInt(num);
      }, 0);
      console.log(sum);
      res.write(sum.toString()+'\n');
      break;
    case 'mul':
      var mul = params.reduce((acc, num) => {
        return acc * parseInt(num);
      }, 1);
      res.write(`${mul}`)
      break;
    default:
      res.write('Defadult.');
  }

}
