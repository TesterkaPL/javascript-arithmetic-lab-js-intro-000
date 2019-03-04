function add(a, b){
  return a + b
}
add(50,80)

function subtract(a, b){
  return a - b
}
subtract(600,130)

function multiply(a, b){
  return a * b
}
multiply(20,30)

function divide(a, b){
  return a / b
}
divide(600,3)

function inc(n){
  return ++n
}

function dec(n){
  return --n
}

function makeInt(n, base){
  var parsed = parseInt(n, 10);
  if (isNaN(parsed)) {return 0;}
  return parsed;
}

function preserveDecimal(n){
  return parseFloat('2.222', 10)
}
