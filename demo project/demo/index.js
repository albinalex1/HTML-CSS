function btn_left(id1, id2) {
  var element2 = document.getElementById(id2);
  var element = document.getElementById(id1);
  element.style.backgroundColor = "#50c878";
  element.style.color = "#ffffff";
  element2.style.backgroundColor = "ivory";
  element2.style.color = "black";
}
function heartClickHandler(fav) {
  var element = document.getElementById(fav);
  var heart = element.className;
  if (heart == "far fa-heart") {
    element.className = "fa fa-heart";
    element.style.color = "red";
  } else {
    element.className = "far fa-heart";
    element.style.color = "rgb(154, 154, 154) ";
  }
}
// Set the date we're counting down to
var countDownDate = new Date("Oct 22, 2023 10:43:25").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
  document.getElementById("day2").innerHTML = days;
  document.getElementById("hour2").innerHTML = hours;
  document.getElementById("min2").innerHTML = minutes;
  document.getElementById("sec2").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("day2").innerHTML = "00";
    document.getElementById("hour2").innerHTML = "00";
    document.getElementById("min2").innerHTML = "00";
    document.getElementById("sec2").innerHTML = "00";
  }
}, 1000);
