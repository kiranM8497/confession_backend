//write a code which shows  the current timw in
// hours minutes and seconds in every second

const clock = () => {
  const today = new Date();
  //   console.log(today);
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
};

setInterval(clock, 1000);
