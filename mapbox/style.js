
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "StamenTerrain_0": {
            "type": "raster",
            "tiles": ["http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "1_1": {
            "type": "geojson",
            "data": json_1_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_StamenTerrain_0_0",
            "type": "raster",
            "source": "StamenTerrain_0"
        },
        {
            "id": "lyr_1_1_0",
            "type": "line",
            "source": "1_1",
            "layout": {},
            "paint": {'line-width': 2.357142857142857, 'line-opacity': 1.0, 'line-color': '#e81c45'}
        }
],
}