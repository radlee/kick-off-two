function myFunction() {
    var event_name = document.getElementById("event_name").value;
    var event_date = document.getElementById("event_date").value;
    var countDownDate = new Date(event_date);
    var interval = setInterval(function() {
      var now = new Date();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("result").innerHTML = "<p> " + days + " Days " + hours + " Hours " +
       minutes + " Minuutes " + seconds + " Seconds left till " + "<span style='color:red'>" + event_name + " </span> day!</p>";

      if (distance < 0) {
        clearInterval(interval);
        document.getElementById("result").innerHTML = "Kick-Off";
      }
    }, 1000);
}
