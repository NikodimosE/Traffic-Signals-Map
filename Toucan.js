console.log('✅ Signals.js loaded');

function addToucan(map) {
  const signals = [
    {
      id: 'TOU-000',
      name: 'Johnny Wattersons Lane',
	  type: 'Toucan Crossing',
      latlng: '54.17215423036191, -4.48630929066368',
      makeModel: 'TSEU 3G',
      installDate: '2007',
      notes: ''
    },
	  
    {
      id: 'TOU-001',
      name: 'New Castletown Road',
	  type: 'Toucan Crossing',
      latlng: '54.15570804890235, -4.502221711343406',
      makeModel: 'Telent 4G',
      installDate: 'June 2020',
      notes: 'Used during TT to control traffic on the Access Road'
    },
  ];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

  signals.forEach(signal => {
    const [lat, lng] = signal.latlng.split(',').map(coord => Number(coord.trim()));

    const popupText = `
      <strong>${signal.name}</strong><br><br>
      <strong>Crossing Type:</strong><br>${signal.type}<br>
      <strong>Signal Make/Model:</strong><br>${signal.makeModel}<br>
      <strong>Install Date:</strong><br>${signal.installDate}<br>
      <strong>Notes:</strong><br>${signal.notes}
    `;

    const icon = L.icon({
      iconUrl: 'icons/Toucan.svg',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    L.marker([lat, lng], { icon })
      .addTo(map)
      .bindPopup(popupText);
  });
}
