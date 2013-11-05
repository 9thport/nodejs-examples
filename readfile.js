// This script will read the text file and pring the number of bytes read and the buffer positions

var fs = require('fs'); 
fs.open('./my_file.txt', 'r', function opened( err, fd) {
  if (err) { throw err }
    var readBuffer = new Buffer(1024), // create the buffer
      bufferOffset = 0,
      bufferLength = readBuffer.length,
      filePosition = 100; // where to start reading from
    fs.read( fd, // callback function
             readBuffer,
             bufferOffset,
             bufferLength,
             filePosition,
             function read( err, readBytes) {
              if (err) { throw err; } 
                console.log(' just read ' + readBytes + ' bytes'); 
              if (readBytes > 0) { 
                console.log( readBuffer.slice( 0, readBytes)); 
              } 
             }); 
});