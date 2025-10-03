you will develop this project on your PC/laptop using XAMPP and you will test it using a Chrome/Chromium-based web browser. The goal of this project is to print the weather report of a place on a map.

First, download project3.zip Download project3.zipand unzip it inside your web server document root directory (ie, inside the htdocs sub-directory in the XAMPP installation directory). On Linux, you may have to do this as the root user and you should add permissions +x and +r). The project3 directory contains 3 files: proxy.php, weather.html, and weather.js, as well as the OpenLayers software. The proxy script proxy.php is used to avoid the cross-domain restriction when using Ajax. All the web service requests to OpenWeather should go through this proxy. See the example in weather.js. Your project is to edit weather.html and weather.js as described in the description of the web application. You run your application on your browser using this linkLinks to an external site.. Note that everything should be done asynchronously and your web page should never be redrawn completely. You should not use any JavaScript library, such as JQuery.

You need to use the OpenWeatherLinks to an external site. API. First, you need to sign upLinks to an external site. and get an API key. You will use the following web service through the proxy:

Current weather dataLinks to an external site.. Examples: proxy.php?lat=44.34&lon=10.99 to get weather given the latitude and longitude.
You need to also to use the OpenLayers 2Links to an external site. API (not the latest 3) to work on OpenStreetMapsLinks to an external site..
After you install project3 in your document directory and after you start your web server:

the OpenLayers APILinks to an external site. is in a local directory inside project3.
there are many examplesLinks to an external site. in a local directory inside project3. They may not display the map correctly because of cross-domain restrictions. For example, click.html shows how to get latitude and longitude from a map.
