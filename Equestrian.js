console.log('✅ Signals.js loaded');

function addEquestrian(map) {
  const signals = [
    {
      id: 'EQU-000',
      name: 'Glen Darragh Road',
	  type: 'Equestrian Crossing',
      latlng: '54.17440494658427, -4.557083134386956',
      makeModel: 'Telent 4G',
      installDate: 'November 2022',
      notes: ' '
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
      iconUrl: 'icons/Equestrian.svg',
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
