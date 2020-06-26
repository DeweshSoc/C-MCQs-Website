let a = 0;

function check() {
  if (document.querySelector(".question1 .optiona").checked == true) {
    a++;
    document.querySelector(".question1").classList.add("right");
    document.querySelector(".question1").classList.remove("wrong");
  } else {
    document.querySelector(".question1").classList.add("wrong");
    document.querySelector(".question1").classList.remove("right");
  }
  if (document.querySelector(".question2 .optiond").checked == true) {
    a++;
    document.querySelector(".question2").classList.add("right");
    document.querySelector(".question2").classList.remove("wrong");
  } else {
    document.querySelector(".question2").classList.add("wrong");
    document.querySelector(".question2").classList.remove("right");
  }
  if (document.querySelector(".question3 .optionc").checked == true) {
    a++;
    document.querySelector(".question3").classList.add("right");
    document.querySelector(".question3").classList.remove("wrong");
  } else {
    document.querySelector(".question3").classList.add("wrong");
    document.querySelector(".question3").classList.remove("right");
  }
  if (document.querySelector(".question4 .optionc").checked == true) {
    a++;
    document.querySelector(".question4").classList.add("right");
    document.querySelector(".question4").classList.remove("wrong");
  } else {
    document.querySelector(".question4").classList.add("wrong");
    document.querySelector(".question4").classList.remove("right");
  }
  if (document.querySelector(".question5 .optiona").checked == true) {
    a++;
    document.querySelector(".question5").classList.add("right");
    document.querySelector(".question5").classList.remove("wrong");
  } else {
    document.querySelector(".question5").classList.add("wrong");
    document.querySelector(".question5").classList.remove("right");
  }
  if (document.querySelector(".question6 .optionb").checked == true) {
    a++;
    document.querySelector(".question6").classList.add("right");
    document.querySelector(".question6").classList.remove("wrong");
  } else {
    document.querySelector(".question6").classList.add("wrong");
    document.querySelector(".question6").classList.remove("right");
  }
  if (document.querySelector(".question7 .optiona").checked == true) {
    a++;
    document.querySelector(".question7").classList.add("right");
    document.querySelector(".question7").classList.remove("wrong");
  } else {
    document.querySelector(".question7").classList.add("wrong");
    document.querySelector(".question7").classList.remove("right");
  }
  if (document.querySelector(".question8 .optionc").checked == true) {
    a++;
    document.querySelector(".question8").classList.add("right");
    document.querySelector(".question8").classList.remove("wrong");
  } else {
    document.querySelector(".question8").classList.add("wrong");
    document.querySelector(".question8").classList.remove("right");
  }
  if (document.querySelector(".question9 .optiond").checked == true) {
    a++;
    document.querySelector(".question9").classList.add("right");
    document.querySelector(".question9").classList.remove("wrong");
  } else {
    document.querySelector(".question9").classList.add("wrong");
    document.querySelector(".question9").classList.remove("right");
  }
  if (document.querySelector(".question10 .optiona").checked == true) {
    a++;
    document.querySelector(".question10").classList.add("right");
    document.querySelector(".question10").classList.remove("wrong");
  } else {
    document.querySelector(".question10").classList.add("wrong");
    document.querySelector(".question10").classList.remove("right");
  }

  document.querySelector(".hide").innerHTML =
    "<h1 class=" + "display-3" + ">Your Score :" + a + " </h1>";
  document.querySelector(".hide").classList.add("show");
  if (a >= 8) {
    document.querySelector(".msg").innerHTML = "Bhut ache launde...Too gud";
  } else if (a >= 5) {
    document.querySelector(".msg").innerHTML = "Thoda aur zor lagao broooo";
  } else {
    document.querySelector(".msg").innerHTML = "Gadha sala !";
  }
  a = 0;
  return false;
}
