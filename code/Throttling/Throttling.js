//  create a button ui and add a throttle as follows
// --- show a "button pressed <X> times" everytime button is pressed
// -- increase "Triggered <Y> Times " count  after  800  ms of throttle

const incrementButton = document.querySelector("#increment");
const incrementPressed = document.querySelector("#increment_pressed");
const incrementCount = document.querySelector("#increment_count");

let pressedCount = 0;
let triggeredCount = 0;
//ask interviewer if using lodash is allowed

const myThrottle = function (cb, delay) {
  // now we want to execute a function at  certain time like every 800 miliseconds
  // we have to calculate time here

  // for example if first time event happened at 200 ms
  // then at another at 400 ms
  //totally 600 ms hasve passed but we cant execute yet because the dealy is 800ms
  // so next timer when event happens at 900ms we have to check
  // what was the last time it was called
  //initially it will be zero we got minus the time like now -last if its greater than delay
  // we execute the callback re we just return
  console.log("this point to", this);
  let last = 0; //initial value set to zero
  return (...args) => {
    let now = new Date().getTime();
    // console.log(now - last);
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
  //   return function (...args) {
  //     if (interval) clearInterval(interval);
  //     interval = setInterval(cb, delay);
  //   };
};

const myThrotlleImpl = myThrottle(function (...args) {
  incrementCount.innerHTML = ++triggeredCount;

  console.log(`hello ${args[0]} how is this throttling for you`);
}, 800);

// const start = new Date().getTime();
const throttleCount = _.throttle(() => {
  //   const now = new Date().getTime();
  //   console.log(now - start);
  incrementCount.innerHTML = ++triggeredCount;
}, 800);

const myThrottling2 = (cb, interval) => {
  //if we have 1000 ms  we got to make sure if event hapend twice or thrice in
  //  between that 1000ms event dont trigger
  //it should trigger only when 1 second has passed
  let last = 0;

  return function () {
    let now = new Date().getTime();
    if (now - last < interval) return;
    last = now;
    return cb();
  };
};

const myThrottlingImpl = myThrottling2(() => {
  console.log("executed");
  incrementCount.innerHTML = ++triggeredCount;
}, 500);

incrementButton.addEventListener("click", () => {
  incrementPressed.innerHTML = ++pressedCount;
  //   throttleCount();
  //   myThrotlleImpl("alex");
  myThrottlingImpl();
});
