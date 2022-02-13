function myFunction(x) {
  let d = new Date();
  alert("Current datetime: " + d + "\nYou passed in: " + x);
}

function getGeneration(p, q, n) {
  if (!input_valid(Number(p.value), Number(q.value))) {
    return;
  }
  var result = {
    redRed: 0,
    redYellow: 0,
    yellowRed: 0,
    yellowYellow: 0

};
  for (var i = 0; i < n.value; i++) {
    var first = draw(Number(p.value));
    var second = draw(Number(p.value));
    if (first && second) {
      result.redRed++;
    } else if (first || second) {
      result.redYellow++;
    } else if (!first && !second) {
      result.yellowYellow++;
    }
  }
  // There is probably a smarter way to do this
  var rROutput = document.querySelector('#rROutput');
  var rYOutput = document.querySelector('#rYOutput');
  var yYOutput = document.querySelector('#yYOutput');
  rROutput.textContent = result.redRed;
  rYOutput.textContent = result.redYellow;
  yYOutput.textContent = result.yellowYellow;
  return;
}

function input_valid(p, q) {
  var valid = p + q == 1.00;
  if (!valid) {
    document.getElementById("imsg").innerHTML = "p and q must add up to 1";
  } else {
    document.getElementById("imsg").innerHTML = "";
  }
  return valid;
}

// Model p as prob of red q as prob of yellow
function draw(p) {
  return Math.random() < p;
}