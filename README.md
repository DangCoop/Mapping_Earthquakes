# **Mapping_Earthquakes**
![](/Resources/earthquakes-caltech-science-e.2e16d0ba.fill-933x525-c100.jpg)

***Vizualizing Earthquake Data throught the interactive maps using JavaScript, Leaflet, Mapbox, and HTML with CSS style.***

## **Overview**
---
The purpose of this project is to visually show the differences between the magnitudes of erthquakes all over the world for the last seven days. The goal was to traverse these GeoJSON data files using JavaScript, D3, and Leaflet to then plot the data on a mapbox map to an API request.

## **Resources**
---
+ SoftWare
    + JavaScript
    + Leaflet
    + D3, Mapbox
    + HTML
    + VS Code 
+ DataSet
    + [Earthquakes GeoJSON file](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)
    + [Tectonic Plates GeoJSON file](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)
    + [Major Earthquakes GeoJSON file](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson)  
  
## **Results**
---
As it can be seen, the final result was an interactive map displaying all the different earthquakes around the world with tectonic plates. The circle-marker's size and color was correlated to the earthquake's magnitude. 
![](/Resources/main1.png) 

---
Additionally, the map included a control leyend where the user could choose from 3 different map styles (dark, satellite, and streets) and toggle (on and off) between all earthquakes, major earthquakes, and the tectonic plates. Also there is the Popup Display on the map which is shows ***"Magnutude"*** and ***"Location"***  for each **Earthquake**. Concerning **Tectonic Plates** - it display ***Tectonic Plate Name*** and ***Source***. And the legeng for magnitude power from 0 to 5+ in different colors.

![](/Resources/PopupDisplay.png)![](/Resources/Legend.png)
![](/Resources/EDetail.png)![](/Resources/TDetail.png)

---
- [x] *Satellite view with all earthquakes.*
![](/Resources/main2.png)

---
- [x] *Dark view with tectonic plates and only major earthquakes being displayed (4.5 magnitude and above):*
![](/Resources/main3.png)

---

![](/Resources/backgr.jpg)
``` 
Denis Antonov 09/12/2022.
```
```
Contact: antonov.resu@gmail.com
```