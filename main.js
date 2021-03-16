$(document).ready(function(){
  var numbers = [];
  var guess = [];
  var max = 50;
  var counter = 5;

 randomNumbers();
 countdown();
 setTimeout(end, 7000);

 function end(){
   getImput();
   outcome();
 }

 function getImput(){
   for(var i = 0; i < numbers.length; ++i) {
     var imput = parseInt(prompt('Among the numbers you just saw, which ones do you remember? '));
      if(numbers.includes(imput)){
         guess.push(imput);
      }
    }
  }

  function outcome(){
    $('#element').text("Here, you found these numbers: "
   + guess + " for a total of: " + guess.length + " numbers");
  }

  function countdown(){
    var id = setInterval(function(){
      $('#element').text(numbers.toString() + ' Countown:' + counter);
      counter--;
      if (counter < 0) {
        $('#element').text("Time is up!");
        clearInterval(id);
      }
    },1000);
  }

  function randomNumbers(){
    for(var i = 0; i < 5; ++i) {
      numbers[i] = randomNumberInRange(1, 50);
    }
  }

  function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    alert("Try to imput only numbers.");
  } else {
    return Math.floor(Math.random()* (max - min) + min);
  }
}
});
