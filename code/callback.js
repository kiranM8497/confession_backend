//a callback is function that is passed as a argument called  back  from that function later on
function countDown(cb) {
  setTimeout(() => {
    cb("countdown finished");
  }, 1000);
}

countDown((val) => console.log(val));
