var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Overworld",
        "Nether",
        "End"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1597189761",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime",
            "zoomLevels": 10,
            "defaultZoom": 5,
            "maxZoom": 10,
            "path": "day",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Overworld",
            "last_rendertime": 1597075170,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                112,
                0
            ],
            "minZoom": 0,
            "spawn": [
                0,
                112,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "Nighttime",
            "zoomLevels": 10,
            "defaultZoom": 5,
            "maxZoom": 10,
            "path": "night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Overworld",
            "last_rendertime": 1597075170,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                112,
                0
            ],
            "minZoom": 0,
            "spawn": [
                0,
                112,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "Biomes",
            "zoomLevels": 10,
            "defaultZoom": 5,
            "maxZoom": 10,
            "path": "biomes",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Overworld",
            "last_rendertime": 1597075170,
            "imgextension": "png",
            "isOverlay": [
                "day"
            ],
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                112,
                0
            ],
            "minZoom": 0,
            "tilesets": [
                "day"
            ],
            "spawn": [
                0,
                112,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "Nether (Northeast)",
            "zoomLevels": 10,
            "defaultZoom": 5,
            "maxZoom": 10,
            "path": "nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Nether",
            "last_rendertime": 1596914169,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                112,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Nether (Southwest)",
            "zoomLevels": 10,
            "defaultZoom": 5,
            "maxZoom": 10,
            "path": "nethersouth",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Nether",
            "last_rendertime": 1596914169,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                112,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 2
        },
        {
            "name": "The End",
            "zoomLevels": 10,
            "defaultZoom": 5,
            "maxZoom": 10,
            "path": "end",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "End",
            "last_rendertime": 1595533574,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                112,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
