//15.5.6 Map GeoJSON Polygons 

//We create the light view tile layerthat will be the background of our map. (change from light-v10 to navigation-day-v1 map and back to streetsv11)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.(change from dark-v10 to navigation-night-v1 map and satellite-streets-v11)
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

//Create the map object with a center and zoom level + default layer in the map object
let map = L.map('mapid', {
    center:[43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

//Pass our map layers into our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map); 

// Accessing the Toronto airlines routes GeoJSON URL
let torontoHoods ="https://raw.githubusercontent.com/DangCoop/Mapping_Earthquakes/main/torontoNeighborhoods.json"

// Create a style for the lines.
let myStyle = {
    color: "blue",
    weight: 1,
    fillColor: "yellow" 
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    //Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME + "</h2>");
        }
    }).addTo(map);
    
});