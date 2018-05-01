import { Marker } from "mapbox-gl";

const mapboxgl = require("mapbox-gl");
const markerEle = document.createElement("div")
markerEle.style.width = "32px";
markerEle.style.height = "39px";
markerEle.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

mapboxgl.accessToken = "pk.eyJ1IjoibW9uaXF1ZXJ6IiwiYSI6ImNqZ280ZjluNjFjdXQyd3JtcXRtcXV4NWkifQ.MBYun0SJwf-BVIs3ESzd8w";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

new mapboxgl.Marker(markerEle).setLngLat([-74.009, 40.705]).addTo(map)

console.log('this is  index.js!');

