
var interval = 1000; // 1 second 
(function schedule() {
  setTimeout( function do_it() {
    my_async_function( function() {
      console.log(' async is done!'); 
      schedule(); 
    }); 
  }, interval); 
}());

function my_async_function() {
  console.log('the async function!');
}
