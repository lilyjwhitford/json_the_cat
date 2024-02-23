const request = require("request");

let commandLine = process.argv.slice(2);

// define function that fetches description of a specific cat from cat API
const fetchBreedDescription = function(breedName) { 
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, response, body) => { // make an http GET request 
  if (error) { // check if there was an error with the request
    console.log("Error with GET request.", error); // print out error details
  } else {
    let data = JSON.parse(body); // convert the JSON string to an object if request was successful
    if (data.length === 0) {
    console.log("Cat breed not found.");
    } else {
    let breedDescription = data[0]["description"]; // access first entry in data array and print out description
    console.log(breedDescription);
      }
    }
  });
};

let breedName = commandLine[0];
fetchBreedDescription(breedName);
