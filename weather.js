var map;
var markersLayer;

function initialize() {
    map = new OpenLayers.Map("map");
    var layer = new OpenLayers.Layer.OSM();
    map.addLayer(layer);

    var lat = 32.75;
    var lon = -97.13;
    var zoom = 8;
    var fromProjection = new OpenLayers.Projection("EPSG:4326");
    var toProjection = new OpenLayers.Projection("EPSG:900913");
    var position = new OpenLayers.LonLat(lon, lat).transform(fromProjection, toProjection);

    map.setCenter(position, zoom);

    markersLayer = new OpenLayers.Layer.Markers("Markers");
    map.addLayer(markersLayer);

    map.events.register("click", map, function (event) {
        var pixel = new OpenLayers.Pixel(event.xy.x, event.xy.y);
        var lonlat = map.getLonLatFromPixel(pixel).transform(toProjection, fromProjection);

        markersLayer.clearMarkers();
        var marker = new OpenLayers.Marker(map.getLonLatFromPixel(pixel));
        markersLayer.addMarker(marker);

        fetchWeather(lonlat.lat, lonlat.lon);
    });
}

function fetchWeather(lat, lon) {
    var xhr = new XMLHttpRequest();
    var url = "proxy.php?lat=" + lat + "&lon=" + lon;
    console.log("Requesting URL: " + url);
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var json;
                try {
                    json = JSON.parse(xhr.responseText);
                    console.log(json);
                } catch (e) {
                    document.getElementById("output").innerHTML = "Error parsing weather data.";
                    return;
                }

                var html = "";
                if (json && json.weather && json.weather.length > 0 && json.main) {
                    html += "<b>City:</b> " + (json.name ? json.name : "Unknown") + "<br>";
                    if (json.sys && json.sys.country) {
                        html += "<b>Country:</b> " + json.sys.country + "<br>";
                    }
                    html += "<b>Weather:</b> " + json.weather[0].main + " | " + json.weather[0].description + "<br>";

                    var tempF = "N/A";
                    if (json.main.temp) {
                        tempF = ((json.main.temp - 273.15) * 9 / 5 + 32).toFixed(1);
                    }
                    html += "<b>Temperature:</b> " + tempF + " °F<br>";

                    if (json.main.humidity) {
                        html += "<b>Humidity:</b> " + json.main.humidity + "%<br>";
                    } else {
                        html += "<b>Humidity:</b> N/A<br>";
                    }

                    if (json.wind && json.wind.speed) {
                        html += "<b>Wind Speed:</b> " + json.wind.speed + " m/s<br>";
                    } else {
                        html += "<b>Wind Speed:</b> N/A<br>";
                    }
                } else if (json && json.message) {
                    html = "API Message: " + json.message;
                } else {
                    html = "No weather data available.";
                }

                document.getElementById("output").innerHTML = html;
            } else {
                document.getElementById("output").innerHTML = "Request error: " + xhr.status;
            }
        }
    };
    xhr.send();
}

window.onload = initialize;
