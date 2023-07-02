this is the only languge using web -> well testing
var - this is old but still use
let - is normal

function example() {
  var x = 1;
  let y = 2;
  if (true) {
    var x = 3;
    let y = 4;
    console.log(x); // Output: 3
    console.log(y); // Output: 4
  }
  console.log(x); // Output: 3
  console.log(y); // Output: 2
}

example();

constant - cannot change (ES6)
no datatype in JS