console.log('linked');

$(document).ready(function(){

  var $10SecTimer = $('#10sec');
  var $h2 = $('h2');

  var countdown = function(){
    $h2.text(parseInt($h2.text()) - 1);
  }

  var timedCountdown = function(){
    window.setInterval(countdown, 1000);
  }

  $10SecTimer.click(timedCountdown)

})