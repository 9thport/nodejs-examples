// In this case the timeout will never be fired and "timed out!" will never be printed to the console.

var timeoutTime = 1000; // one second 
var timeout = setTimeout( function() { 
  console.log(" timed out!"); 
}, timeoutTime); 
clearTimeout( timeout);