console.log('✅ Signals.js loaded');

function addSignalControlledJunctions(map) {
  const signals = [
    {
      id: 'SCJ-000',
      name: 'A3/A5/Malew Street',
      latlng: '54.078386224031725, -4.655903018937784',
      makeModel: 'Microsense LSH',
      installDate: 'Early 2000s',
      notes: 'Due for Upgrade'
    },
	  
	{
      id: 'SCJ-001',
      name: 'Bray Hill',
      latlng: '54.16154094154444, -4.489951100007567',
      makeModel: 'Telent 4G',
      installDate: 'Late 2010s',
      notes: 'Upgraded from Mellors, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-002',
      name: 'Broadway/Victoria Rd',
      latlng: '54.158390307298205, -4.479538243747242',
      makeModel: 'Telent 4G',
      installDate: 'Early 2020s',
      notes: 'Upgraded from Mellors, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-003',
      name: 'Circular Rd/ Prospect Hill/ Sydney Mnt',
      latlng: '54.151249782432046, -4.482925654474177',
      makeModel: 'Telent 4G',
      installDate: '2015',
      notes: 'Upgraded from Mellors, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-004',
      name: 'Circular Rd/ Upper Church St',
      latlng: '54.15020644057287, -4.484416081539069',
      makeModel: 'Telent 4G',
      installDate: '2018',
      notes: 'Upgraded from Microsense LSH, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-005',
      name: 'Circular Rd/ George St',
      latlng: '54.14964122199379, -4.485595496627254',
      makeModel: 'Telent 4G',
      installDate: '2018',
      notes: 'Upgraded from Microsense LSH, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-006',
      name: 'Lord St/North Quay',
      latlng: '54.14810069450492, -4.4831557676457825',
      makeModel: 'Telent 4G',
      installDate: '2018',
      notes: 'Upgraded from Mellors/Microsense LSH, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-007',
      name: 'New Castletown Rd/Anagh Coar Ln',
      latlng: '54.150416062105045, -4.514458369444907',
      makeModel: 'Telent 4G',
      installDate: 'Late 2010s',
      notes: 'Upgraded from Microsense LSH, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-008',
      name: 'New Castletown Rd/Groves Rd',
      latlng: '54.153418957160774, -4.508656289349851',
      makeModel: 'TSEU 3G',
      installDate: '2007',
      notes: 'Upgraded from Mellors, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-009',
      name: 'Peel Rd/Circular Road',
      latlng: '54.14949467255882, -4.488935647948782',
      makeModel: 'TSEU 3G',
      installDate: '2015',
      notes: 'Upgraded from Mellors, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-010',
      name: 'Peel Rd/Athol St',
      latlng: '54.148116870723385, -4.484720579541952',
      makeModel: 'TSEU 3G',
      installDate: '2010',
      notes: 'Upgraded from Mellors, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-011',
      name: 'Peel Rd/Pulrose Rd',
      latlng: '54.151040045639895, -4.498213721337107',
      makeModel: 'Telent 4G',
      installDate: '2015',
      notes: 'Upgraded from Mellors, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-012',
      name: 'Rousemount',
      latlng: '54.15469600372513, -4.484662781768767',
      makeModel: 'Microsense MSH',
      installDate: '2000s',
      notes: 'Unsure if upgraded from another signal type'
    },
	  
	{
      id: 'SCJ-013',
      name: 'St Ninians',
      latlng: '54.16525555376951, -4.483926757757274',
      makeModel: 'Telent 4G',
      installDate: 'August 2025',
      notes: 'Upgraded from Microsense MSH, Installed: 2000 <br> Upgraded from Mellors, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-014',
      name: 'Woodbourne Rd/York Rd',
      latlng: '54.16118454622046, -4.484704186317851',
      makeModel: 'Microsense LSH',
      installDate: '2000s',
      notes: 'Upgraded from STOP junction, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-015',
      name: 'York Rd/Somerset Rd',
      latlng: '54.16158470220563, -4.486081948209481',
      makeModel: 'Microsense LSH',
      installDate: '2000s',
      notes: 'Upgraded from STOP junction, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-016',
      name: 'A1/Ballagarey Road',
      latlng: '54.17401050842965, -4.549457412053193',
      makeModel: 'Telent 4G',
      installDate: 'Late 2010s',
      notes: 'Upgraded from Mellors, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-017',
      name: 'A1/Glen Darragh Road',
      latlng: '54.17704232884841, -4.554504133605894',
      makeModel: 'Microsense LSH',
      installDate: '2007',
      notes: 'Upgraded from STOP junction, Installed: Unknown <br> Retrofitted from TSEU/Telent Spares'
    },
	  
	{
      id: 'SCJ-018',
      name: 'Hillberry Rd/Highfield Cres/Heywood Ave',
      latlng: '54.17887821975387, -4.467771080881639',
      makeModel: 'TSEU 3G',
      installDate: '2006',
      notes: 'Upgraded from STOP junction, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-019',
      name: 'Onchan Main Rd',
      latlng: '54.17449816820668, -4.454792776751969',
      makeModel: 'TSEU 3G',
      installDate: '2012',
      notes: 'Upgraded from Mellors, Installed: 1980s'
    },
	  
	{
      id: 'SCJ-020',
      name: 'Parliament Square',
      latlng: '54.32218633830807, -4.386678664907771',
      makeModel: 'Microsense LSH',
      installDate: '2006',
      notes: 'Upgraded from STOP junction, Installed: Unknown'
    },
	  
	{
      id: 'SCJ-021',
      name: 'Ballacraine',
      latlng: '54.20279010245623, -4.629189853640206',
      makeModel: 'Telent 4G',
      installDate: '2020',
      notes: 'Upgraded from Microsense LSH, Installed: Early 2000s <br> Upgraded from Mellors, Installed: Unknown '
    },
  ];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

  signals.forEach(signal => {
    const [lat, lng] = signal.latlng.split(',').map(coord => Number(coord.trim()));

    const popupText = `
      <strong>${signal.name}</strong><br><br>
      <strong>Signal Make/Model:</strong><br>${signal.makeModel}<br>
      <strong>Install Date:</strong><br>${signal.installDate}<br>
      <strong>Notes:</strong><br>${signal.notes}
    `;

    const icon = L.icon({
      iconUrl: 'icons/SCJ.svg',
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
