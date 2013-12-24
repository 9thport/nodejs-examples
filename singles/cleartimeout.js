var timeout = setTimeout( function A() {
 console.log(" function a timed out!");
}, 2000); 

setTimeout( function B() { 
  clearTimeout( timeout);
  console.log(" i am function b!");
}, 1000);
