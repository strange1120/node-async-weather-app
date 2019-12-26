const request = require("request");
const geocode = require("./utils/geocode");

const url =
  "https://api.darksky.net/forecast/78f6b2a06f77839f320032fabe87f06b/37.8267,-122.4233?lang=es";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       `${response.body.daily.data[0].summary}. It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`
//     );
//   }
// });

// const geocodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3RyYW5nZTExMjAiLCJhIjoiY2swemZrdmVwMGhhODNvb3dnZmpyYWFwbSJ9.bv1oc0D-xRAWCYQBD2_GIQ&limit=1";

// request({ url: geocodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location. Try another search");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];

//     console.log(latitude, longitude);
//   }
// });

geocode("Jacksonville", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
