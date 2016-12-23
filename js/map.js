mapboxgl.accessToken = 'pk.eyJ1IjoiY3JpY2U5MzciLCJhIjoiZjhmNmY3NzFiN2ZmODExZmVlMWYyMGZlZWMzNzE1ZDcifQ.3435dWIDUWFnAa6oicXfRQ';

var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-84.296108, 33.773726],
    zoom: 15,
    pitch: 45,
    bearing: -17.6,
    container: 'map'
});

// the 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
    map.addSource('ZONECLASS', {
        type: 'vector',
        url: 'mapbox://crice937.6wo7uv0k'
    });
    map.addLayer({
        id: 'zoningDistrict-1q7u1q',
        type: 'vector',
        source: 'ZONECLASS',
        "source-layer": 'zoningDistrict-1q7u1q',
        type: 'fill',
        paint: {
            'fill-color': {
                'property':'ZONECLASS',
                'type': 'categorical',
                'stops': [
                ['RS-17', '#feb119'],
                //['R-50', '#'],
                ['R-60', '#f8fdba'],
                ['R-85', '#f8fd6e'],
                //['RM-18', '#'],
                ['RM-22', '#b09a2c'],
                //['RM-43', '#'],
                //['PO', '#'],
                //['NMU', '#'],
                ['C-1', '#D693A6'],
                ['C-2', '#e60000'],
                ['C-3', '#c500ff'],
                ['MU', '#005ce6'],
                ['I', '#65c7ea']
                //['H', '#'],
                //['PUD', '#']
                ]
            },
        }
    });

    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#F5F5F5',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'height'
            },
            'fill-extrusion-base': {
                'type': 'identity',
                'property': 'min_height'
            },
            'fill-extrusion-opacity': .6
        }
    });
});
