class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
  try {
    let dir = primitiveMultiply(a, b);
    console.log(dir);
    break;
  } catch (e) {
    if(!e instanceof MultiplicatorUnitFailure) return;
   
    
  }
}
  
}

console.log(reliableMultiply(8, 8));