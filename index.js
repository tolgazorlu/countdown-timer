
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var x = setInterval(
    function(){

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0){
            clearInterval(x);
            document.getElementById("countdown_text").innerHTML = "WELL DONE!";
        }
    }, 1000
);