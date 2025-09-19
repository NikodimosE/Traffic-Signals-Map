console.log('✅ Signals.js loaded');

function addLiftBridge(map) {
  const signals = [
    {
      id: 'LIF-000',
      name: 'Millenium Bridge',
	  type: 'Lifting Bridge',
      latlng: '54.147143130265306, -4.47698192938187',
      makeModel: 'Telent 4G',
      installDate: 'Mid 2010s',
      notes: 'Upgraded from PEEK Elite, Installed: 2006 <br> Upgraded from Wig-Wags, Installed: 1999'
    },
  ];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

  signals.forEach(signal => {
    const [lat, lng] = signal.latlng.split(',').map(coord => Number(coord.trim()));

    const popupText = `
      <strong>${signal.name}</strong><br><br>
      <strong>Signal Context:</strong><br>${signal.type}<br>
      <strong>Signal Make/Model:</strong><br>${signal.makeModel}<br>
      <strong>Install Date:</strong><br>${signal.installDate}<br>
      <strong>Notes:</strong><br>${signal.notes}
    `;

    const icon = L.icon({
      iconUrl: 'icons/LiftingBridge.svg',
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

