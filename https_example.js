var https = require('https');
console.log("I did it!");

var options = {
                host: "www.example.org",
                path: '/'
              };
var callback = function() {
  console.log("In responce handler callback!");
}

console.log("I'm about to make the request");

https.request(options, callback).end();

console.log("I'va made the request");
