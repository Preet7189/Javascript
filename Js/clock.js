$(document).ready( function() 
{
    
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var ampm = document.getElementById('ampm');

function updateClock(){
  var now = new Date();
  var new_hours = now.getHours();
  var new_minutes = now.getMinutes();
  var new_seconds = now.getSeconds();
  var new_ampm = "AM";
      
  if(new_hours>12){
    new_hours = new_hours-12;
    new_ampm = "PM";
  };
  hours.innerHTML = padDigit(new_hours);
  minutes.innerHTML = padDigit(new_minutes);
  seconds.innerHTML = padDigit(new_seconds);
  ampm.innerHTML = new_ampm;
}
setInterval(updateClock,1000);
updateClock();

function padDigit(digit){
  if(digit<10){
    return ("0"+digit);
  }
  else{
    return digit;
  }
}
});
    