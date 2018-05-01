const mapboxgl = require("mapbox-gl");


mapboxgl.accessToken = "pk.eyJ1IjoibW9uaXF1ZXJ6IiwiYSI6ImNqZ280ZjluNjFjdXQyd3JtcXRtcXV4NWkifQ.MBYun0SJwf-BVIs3ESzd8w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});



console.log('this is  index.js!');
