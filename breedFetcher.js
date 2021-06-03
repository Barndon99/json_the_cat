const request = require('request');

// let args = process.argv.splice(2);
// 
// const breed = args[0];
// 
// const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
// 
// 
// request(`${url}`, (error, response, body) => {
//   if (error) {
//     console.log("error", error);
//     return;
//   }
//   const bodyObj = JSON.parse(body);
//   if (!bodyObj[0]) {
//     console.log("Error Breed not found");
//   }
//   if (bodyObj[0]) {
//     console.log(`${bodyObj[0].description}`);
//   }
// });
const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const bodyObj = JSON.parse(body);
    if (bodyObj[0]) {
      callback(null, bodyObj[0].description);
    } else {
      callback(error, null);
    }
  });
};




// function fetchBreedDescription(breedName, (error, description) => {
//  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
//
//  request(`${url}`, (error, body) => {
//    if (error) {
//      return error;
//    }
//    const bodyObj = JSON.parse(body);
//
//    if (bodyObj[0]) {
//      console.log(`${bodyObj[0].description}`);
//    }
//    if (!bodyObj[0]) {
//      console.log("breed not found");
//    }
//  })
// });

module.exports = {fetchBreedDescription};