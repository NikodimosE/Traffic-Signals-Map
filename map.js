// map.js

// Initialize the map and expose it globally
window.map = L.map('map').setView([54.21870788672446, -4.548117223418051], 11);

// Add a light basemap from Carto
L.tileLayer('https://basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors & Carto',
  maxZoom: 19
}).addTo(window.map);
// JavaScript Document