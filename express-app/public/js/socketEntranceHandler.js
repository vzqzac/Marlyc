var socket = io.connect('http://127.0.0.1:3000');

socket.on('UID', function(data) {
  console.log('Found data: ', data);
});
