
var hashemail = ''


$(function(){
  $('.getpower').click(getPower);
  $('.getsum').click(getSum);
  $('.getmul').click(getMul);
  $('.getdiv').click(getDiv);
  $('.getgravator').click(getGravator);

})

// powe fucntion
function getPower(){
  var base = $('#base').val();
  var exponent = $('#exponent').val();
  $.get(`/math/pow/${base}/${exponent}`)
  .done(function(data){
    $('.powerresult').text(data)

  })
  .fail(function(error){
    console.log("error:", error);
  });
}

//sum function

function getSum(){
  console.log(typeof num);
  var num1 = $('#num1').val();
  var num2 = $('#num2').val();
  $.get(`/math/sum/${num1}/${num2}`)
  .done(function(data){
    $('.sumresult').text(data)

  })
  .fail(function(error){
    console.log("error:", error);
  });
}

// multiplication function

function getMul(){
  console.log(typeof num);
  var mul1 = $('#mul1').val();
  var mul2 = $('#mul2').val();
  $.get(`/math/mul/${mul1}/${mul2}`)
  .done(function(data){
    $('.mulresult').text(data)

  })
  .fail(function(error){
    console.log("error:", error);
  });
}

//  Division function


function getDiv(){
  console.log(typeof num);
  var div1 = $('#div1').val();
  var div2 = $('#div2').val();
  $.get(`/math/div/${div1}/${div2}`)
  .done(function(data){
    $('.divresult').text(data)

  })
  .fail(function(error){
    console.log("error:", error);
  });
}

// gravator function
function getGravator(){
  var email = $('.gravatorinput').val()

  $.get(`/gravatar/${email}`)
  .done(function(data){
    var hashemail = data;
    $('#gravatorimg').attr('src',`https://s.gravatar.com/avatar/${hashemail}`)
  })
  .fail(function(error){
    console.log("error:", error);
  });

}
