function booWho(bool) {
  return typeof bool === "boolean";
}

// Tests
console.log(booWho(true));          // expected: true
console.log(booWho(false));         // expected: true
console.log(booWho([1, 2, 3]));     // expected: false
console.log(booWho([].slice));      // expected: false
console.log(booWho({ "a": 1 }));    // expected: false
console.log(booWho(1));             // expected: false
console.log(booWho(NaN));           // expected: false
console.log(booWho("a"));           // expected: false
console.log(booWho("true"));        // expected: false
console.log(booWho("false"));       // expected: false