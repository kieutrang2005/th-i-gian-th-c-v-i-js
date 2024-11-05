function updateclock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timeString = `${hours} : ${minutes} : ${seconds}`;
  console.log(timeString);

  document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateclock, 1000);
