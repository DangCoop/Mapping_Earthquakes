//Add console.log to check to see if our code is working
console.log("working");

//Create the map object with a center and zoom level.
let map = L.map('mapid').setView([41.5868, -93.6250],5);

//Version With Two poins (red Line)
//Create a line from LAX to SFO
// Coordinates for each point to be used in the line.(two points)
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
// ];

 // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "red"
// }).addTo(map);

//Version 2 With Four poins (yellow Line)
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//     color: "yellow"
// }).addTo(map);


//Version 3 Skill Drill 
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "blue",
    weight: '4',
    opacity: 0.5,
    dashArray: '10, 10',
}).addTo(map);

// We create the tile layer that will be the background of our map.
//Map Design /dark-v10/, /streets-v11/,/satellite-streets-v11/,/light-v10/.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map); 

