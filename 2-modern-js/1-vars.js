{
  // Block Scope
}

if (true) {
  // Block Scope
}

// Recommended: use let
for (var i = 1; i <= 10; i++) {
  // Block Scope
}

function sum(a, b) {
  // Function Scope
  var result = a + b;
}

//console.log(result);
//console.log(i);

sum(4 + 3);
