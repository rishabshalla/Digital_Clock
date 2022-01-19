function clock() {
  date = new Date();
  var meridiem = "AM";
  let hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12;
    meridiem = "PM";
  }
  const minute = date.getMinutes();
  const second = date.getSeconds();
  document.getElementsByClassName("num-hour")[0].innerText = hour;
  document.getElementsByClassName("num-min")[0].innerText = minute;
  document.getElementsByClassName("num-sec")[0].innerText = second;
  document.getElementsByClassName("am")[0].innerText = meridiem;
  return;
  //   console.log(hour);
  //   console.log(minute);
  //   console.log(second);
  //   console.log(meridiem);
}

function takeInput() {
  wake = document.getElementById("wake").value;
  lunch = document.getElementById("lunch").value;
  nap = document.getElementById("nap").value;
  wake_time =
    document.getElementById("wake").options[
      document.getElementById("wake").selectedIndex
    ].text;
  lunch_time =
    document.getElementById("lunch").options[
      document.getElementById("lunch").selectedIndex
    ].text;
  nap_time =
    document.getElementById("nap").options[
      document.getElementById("nap").selectedIndex
    ].text;

  if (wake == "null" || lunch == "null" || nap == "null") {
    alert("Looks like you missed something\nPlease select all time inputs");
  } else {
    document.getElementsByClassName("set")[0].style.display = "block";
  }
  return;
}

function setTask() {
  document.getElementsByClassName(
    "set-text"
  )[0].innerText = `Wake up time: ${wake_time}\nLunch time: ${lunch_time}\nNap time: ${nap_time}`;
  if (date.getHours() == wake) {
    document.getElementsByClassName("task-image")[0].style.backgroundImage =
      "url(./images/wakeup_image.svg)";
    document.getElementById("task-text").innerText = "WAKE UP !!";
  } else if (date.getHours() == lunch) {
    document.getElementsByClassName("task-image")[0].style.backgroundImage =
      "url(./images/lunch_image.svg)";
    document.getElementById("task-text").innerText = "LET'S HAVE SOME LUNCH !!";
  } else if (date.getHours() == nap) {
    document.getElementsByClassName("task-image")[0].style.backgroundImage =
      "url(./images/goodnight_image.svg)";
    document.getElementById("task-text").innerText = "GOOD NIGHT!!";
  }
  return;
}

// console.log(wake);
// console.log(lunch);
// console.log(nap);
setInterval(() => {
  clock();
  setTask();
}, 100);

// console.log(document.getElementById("nap").value);
