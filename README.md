

# Weather Map Viewer Web Application — README

## Overview

This project is a simple weather web application that shows the current weather at any location you click on a map. The application uses:
- **OpenLayers 2** (local copy included) to display an interactive OpenStreetMap
- **OpenWeather API** (accessed via a PHP proxy) to retrieve up-to-date weather information

You will develop and test the application on your own PC/laptop using **XAMPP** and a Chromium-based browser.

***

## Setup Instructions

1. **Download and Unzip**
   - Download `project3.zip` from your course portal.
   - Unzip inside your web server document root directory (e.g., `C:\xampp\htdocs\project3` on Windows).

2. **File Structure**
   ```
   project3/
     ├── weather.html
     ├── weather.js
     ├── proxy.php
     ├── OpenLayers/
     └── examples/ (contains map examples)
   ```

3. **Set Permissions (Linux only)**
   - If using Linux, ensure you have `+x` and `+r` permissions:
     ```bash
     sudo chmod -R +xr project3/
     ```

4. **Start XAMPP**
   - Open the XAMPP control panel.
   - Start the Apache server.

5. **Get an OpenWeather API Key**
   - Go to [OpenWeather](https://home.openweathermap.org/users/sign_up) and create a free account.
   - Copy your API key.

6. **Configure Your API Key**
   - In `proxy.php`, replace the default API key value:
     ```php
     // Change this to your personal key
     $appid = "YOUR_API_KEY_HERE";
     ```
   - Save changes.

***

## Usage

1. **Access the Web App**
   - Open your browser.
   - Navigate to:  
     ```
     http://localhost/project3/weather.html
     ```

2. **How It Works**
   - The map will load using OpenLayers and OpenStreetMap.
   - Click anywhere on the map.
     - The weather for that location will be shown without reloading the page.

3. **Tech Notes**
   - All weather data requests go through `proxy.php` to bypass cross-origin (CORS) issues.
   - All dynamic actions (weather fetching and displaying) are handled with vanilla JavaScript. No external libraries like JQuery are used.
   - The web page updates weather information asynchronously without full reload.

***

## Additional Project Details

- **OpenLayers and Examples:**  
  The `OpenLayers` folder and `examples` folder contain demos for reference. Some examples may not display maps correctly due to CORS restrictions—this application avoids that by using the included `proxy.php`.

- **No Redrawing:**  
  The web page never fully reloads or redraws; only the weather info updates after a map click.

- **Browser Support:**  
  Recommended to use Google Chrome or any Chromium-based browser for testing.

- **Academic Honesty:**  
  All submissions must be your own original code, except the provided starter files and libraries.

## Troubleshooting

- If the map doesn't show or weather fails to load:
  - Check that XAMPP/Apache is running.
  - Ensure your API key is correct.
  - Look for errors in your browser console (F12).

- For Linux users:
  - Make sure the server runs with correct permissions.
  - Try `sudo chown -R www-data:www-data project3/` for Apache permissions if needed.

***

## Files to Edit

- **weather.html** — Edit to adjust UI as needed.
- **weather.js** — Edit to implement map interaction and fetching/parsing/displaying weather data.

**Do NOT edit:**  
- Most OpenLayers library code  
- Example files (for reference only)

***
