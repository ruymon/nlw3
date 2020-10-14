// Create Map
const map = L.map('mapid').setView([-23.5905904,-46.6423963], 15);

// Create and add a TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create popup overlay

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="chosse-orphanage"> <img src="./public/images/arrow-white.svg" ></a');


// Create and add Marker

L.marker([-23.5905904,-46.6423963], { icon } )
    .addTo(map)
    .bindPopup(popup)
