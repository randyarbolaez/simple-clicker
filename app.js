console.log(
  "If you're reading this check me out on Linkedin(click the word 'CLICKER')"
);

const addOneBtn = document.getElementById('add-one-btn');
const subtractOneBtn = document.getElementById('subtract-one-btn');
const resetBtn = document.getElementById('reset-btn');

const index = document.getElementById('index');

var startingNumber = 0;

index.innerHTML = startingNumber;

function addition() {
  startingNumber;
  return (index.innerHTML = startingNumber++ + 1);
}

function subtraction() {
  startingNumber = startingNumber;
  return (index.innerHTML = startingNumber-- - 1);
}

function reset() {
  startingNumber = 0;
  return (index.innerHTML = startingNumber);
}

addOneBtn.onclick = addition;
subtractOneBtn.onclick = subtraction;
resetBtn.onclick = reset;
