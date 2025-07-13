//create a button ui and a debounce as follows
// --- show a "button pressed <X> times" everytime button is pressed
// -- increase "Triggered <Y> Times " count  after  800  ms of debounce

const incrementButton = document.querySelector("#increment");
const incrementPressed = document.querySelector("#increment_pressed");
const incrementCount = document.querySelector("#increment_count");

let pressedCount = 0;
let triggeredCount = 0;
//ask interviewer if using lodash is allowed

//ouw own debounce
const myDebounce = (callback, delay) => {
  //for delay we have to a timer to make sure that dalay works
  let timer;

  //have to return function
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
};

const mydeBounceImpl = myDebounce(() => {
  incrementCount.innerHTML = ++triggeredCount;
}, 800);

const debounceCount = _.debounce(() => {
  incrementCount.innerHTML = ++triggeredCount;
}, 800);

//doing a function execution at a delay
const myDebounce2 = function (cb, delay) {
  let timer;

  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay);
  };
};

const myDebounceImpl = myDebounce2(() => {
  console.log("debouncing at work ");
  incrementCount.innerHTML = ++triggeredCount;
}, 1000);

incrementButton.addEventListener("click", () => {
  incrementPressed.innerHTML = ++pressedCount;
  //   debounceCount();
  //   mydeBounceImpl();
  myDebounceImpl();
});
