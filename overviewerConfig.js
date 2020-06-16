var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
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
        "survival - overworld",
        "survival - nether",
        "survival - end"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1592262305",
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
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "day",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - overworld",
            "last_rendertime": 1592236778,
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
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - overworld",
            "last_rendertime": 1592236778,
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
            "name": "Nether (Northeast)",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - nether",
            "last_rendertime": 1592181398,
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
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "nethersouth",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - nether",
            "last_rendertime": 1592181398,
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
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "end",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - end",
            "last_rendertime": 1592183570,
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
