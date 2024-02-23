const request = require("request");

let commandLine = process.argv.slice(2) // extract command line arguments

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=sib`;
request(URL, (error, response, body) => { // make an http request 
  const data = JSON.parse(body); // convert the JSON string to an object
  let breedDescription = data[0]["description"]; // access first entry in data array and print out description

});
};  