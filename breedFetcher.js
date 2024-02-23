const request = require("request");

// define function that fetches description of a specific cat from cat API
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => { // make an http GET request
    if (error) { // check if there was an error with the request
      callback(error, null); // print out error details
    } else {
      let data = JSON.parse(body); // convert the JSON string to an object if request was successful
      if (data.length === 0) {
        let breedNotFoundErrorMsg = "Cat breed not found.";
        callback(breedNotFoundErrorMsg, null);
      } else {
        let breedDescription = data[0]["description"]; // access first entry in data array and print out description
        callback(null, breedDescription);
      }
    }
  });
};


module.exports = { fetchBreedDescription };