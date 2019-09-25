const request = require("request");

const url =
  "https://api.darksky.net/forecast/78f6b2a06f77839f320032fabe87f06b/37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data);
});
