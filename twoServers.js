var http = require('http');
var twitter = require('twitter');

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response) {
    response.end("You're awesome it works!! Path Hit: " + request.url);
}

function handleRequest2(request, response) {
    response.end("You idot it works!! Path Hit: " + request.url);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
    console.log("Server listening on localhost: " + PORT1 + " You are awesome btw!");
})

server2.listen(PORT2, function() {
    console.log("Server listening on localhost: " + PORT2 + " You suck btw!");
})

// var client = new Twitter({
//     consumer_key: 'BjYaXuCtOrH7US3sRqc7KxsX4',
//     consumer_secret: 'ApCwptqN2ULf0VJZVA9V1BrFaUCQg6F5PWs9P7sYx13jszMBIP',
//     access_token_key: '1323253838-4du7WhKhTe6xEw46GRehqOEgYOUImX0lfGoxt0v',
//     access_token_secret: 'lmcTBOPi1unz37tGyMkZHCJS04mRCQxQfCI5iVOtMy5wl',
// });
   
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//       console.log(tweets);
//     }
// });