const request = require('request');

let args = process.argv.splice(2);

const breed = args[0];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(`${url}`, (error, response, body) => {
  if (error) {
    console.log("error", error);
    return;
  }
  const bodyObj = JSON.parse(body);
  if (!bodyObj[0]) {
    console.log("Error Breed not found");
  }
  if (bodyObj[0]) {
    console.log(`${bodyObj[0].description}`);
  }
});