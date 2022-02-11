function myFunction(x) {
  let d = new Date();
  alert("Current datetime: " + d + "\nYou passed in: " + x);
}

function getGeneration(p, n) {
  console.log(p.value);
  console.log(n.value);
  var result = {
    redRed: 0,
    redYellow: 0,
    yellowRed: 0,
    yellowYellow: 0

};
  for (var i = 0; i < n.value; i++) {
    var first = draw(p.value);
    var second = draw(p.value);
    if (first && second) {
      result.redRed++;
    } else if (first && !second) {
      result.redYellow++;
    } else if (!first && second) {
      result.yellowRed++;
    } else if (!first && !second) {
      result.yellowYellow++;
    }
  }
  // There is probably a smarter way to do this
  rROutput = document.querySelector('#rROutput');
  rYOutput = document.querySelector('#rYOutput');
  yROutput = document.querySelector('#yROutput');
  yYOutput = document.querySelector('#yYOutput');
  rROutput.textContent = result.redRed;
  rYOutput.textContent = result.redYellow;
  yROutput.textContent = result.yellowRed;
  yYOutput.textContent = result.yellowYellow;
}

// Model p as prob of red q as prob of yellow
function draw(p) {
  return Math.random() < p;
}