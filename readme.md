## Weather application

The application allows you to find the coordinates of a specific place and then, based on this data, displays the current and forecast weather. The following information are displayed:

- Current temperature
- Humidity
- Pressure
- Wind speed
- Weather forecast 5 days ahead


### Entering the site
After entering the site, an `IPLocating` request is sent to download the current location due to our IP address. If successful, another request is sent, but this time to `DarkSky` to download the current weather and display it to the user.


### Adding new city
The site has a "Dodaj miasto" button. After clicking it a hidden section with the form is displayed. After the user has written the city or the entire address, a request is made to the `GeoLocating` API to retrieve latitude and longitude. If it succeeds, another request is sent, but this time to `DarkSky` to download the current weather and display it to the user.


## API

### IPLocating
https://ipapi.co/
```json
{
  "query": "84.258.81.242",
  "status": "success",
  "country": "Poland",
  "countryCode": "PL",
  "region": "WP",
  "regionName": "Greater Poland",
  "city": "Ostrów Wielkopolski",
  "zip": "63-400",
  "latitude": 51.6468,
  "longitude": 17.8108,
  "timezone": "Europe/Warsaw",
  "isp": "Przedsiebiorstwo Promax Sp. J.",
  "org": "",
  "as": "PROMAX"
}
```


### GeoLocating
**API key is required**

[GraphHopper Directions API with Route Optimization](https://graphhopper.com)  

Response:
```json
{
    "hits": [
        {
            "osm_id": 2805690,
            "osm_type": "R",
            "extent": [
                16.8073393,
                51.2100604,
                17.1762192,
                51.0426686
            ],
            "country": "Poland",
            "osm_key": "place",
            "osm_value": "city",
            "name": "Wroclaw",
            "state": "Lower Silesian Voivodeship",
            "point": {
                "lng": 17.0326689,
                "lat": 51.1089776
            }
        }
	  ]
}
```

### Darksky
**API key is required**

https://darksky.net/dev