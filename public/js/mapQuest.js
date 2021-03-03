function initMap() {
	// add your code here
	L.mapquest.key = 'rVwhnnWGzwepvsfnaJw1oKgQ2U0UTY4P';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [32.878520, -117.2358],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

}