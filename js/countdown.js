var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

function myFunction() {
  var today = new Date();
  var date = prompt("Please enter date.", today.getDate()+"-"+monthNames[today.getMonth()]+"-"+today.getFullYear());
  if (date != null) {
    x = "Hello! You have entered date as: " + date;
    var countDownDate = new Date(x);
    var x = setInterval(function() {
      var now = new Date();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("result").innerHTML = days + "Days " + hours + "Hours " +
       minutes + "Minuutes " + seconds + "Seconds left till the kick off day";

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("result").innerHTML = "Kick-Off";
      }
    }, 1000);
    // document.getElementById("result").innerHTML = x;
  }
}
