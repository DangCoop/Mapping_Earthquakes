//15.5.5 GeoJSON LineString type objects. Lines and new maps, popup menu for each

//We create the light view tile layerthat will be the background of our map. (change from light-v10 to navigation-day-v1 map)
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.(change from dark-v10 to navigation-night-v1 map)
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Light: light,
    Dark: dark
};

//Create the map object with a center and zoom level + default layer in the map object
let map = L.map('mapid', {
    center:[44.0, -80.0],
    zoom: 2,
    layers: [light]
});

//Pass our map layers into our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map); 

// Accessing the Toronto airlines routes GeoJSON URL
let torontoData ="https://raw.githubusercontent.com/DangCoop/Mapping_Earthquakes/main/torontoRoutes.json"

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
    //Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data,{
        style: myStyle,
        //We turn each feature into a marker on the map.
        onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2> <hr> <h3>Destination: " + feature.properties.dst + "</h3>");
        }
    }).addTo(map);
});