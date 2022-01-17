function clock() {
  const date = new Date();
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
  //   console.log(hour);
  //   console.log(minute);
  //   console.log(second);
  //   console.log(meridiem);
}

function click() {
  console.log(meridiem);
}
setInterval(() => {
  clock();
  click();
}, 1000);

let i = 10;
function bb() {
  i = 11;
  console.log(i);
}
console.log(i);
