console.log('✅ Signals.js loaded');

function addPuffin(map) {
  const signals = [
    {
      id: 'PUF-000',
      name: 'Ballabeg Main Road',
	  type: 'Puffin Crossing',
      latlng: '54.100601079114654, -4.679972471072885',
      makeModel: 'Telent 4G',
      installDate: 'July 2023',
      notes: ''
    },
	  
    {
      id: 'PUF-001',
      name: 'Douglas Main Road',
	  type: 'Puffin Crossing',
      latlng: '54.09807089973311, -4.628835756121023',
      makeModel: 'Telent 4G',
      installDate: '2010s',
      notes: 'Upgraded from Pelican Crossing, Mellors, Installed: Unknown'
    },
	  
    {
      id: 'PUF-002',
      name: 'Arbory Road',
	  type: 'Puffin Crossing',
      latlng: '54.0752407614222, -4.660263931275226',
      makeModel: 'TSEU 3G',
      installDate: '2000s',
      notes: ''
    },
	  
    {
      id: 'PUF-003',
      name: 'Douglas Road',
	  type: 'Puffin Crossing',
      latlng: '54.0788397681012, -4.644231235006279',
      makeModel: 'Telent 4G',
      installDate: 'February 2021',
      notes: 'Upgraded from Puffin Crossing, Microsense LSH, Installed: Early 2000s'
    },
	  
    {
      id: 'PUF-004',
      name: 'Victoria Road',
	  type: 'Puffin Crossing',
      latlng: '54.07799712430889, -4.648106969942843',
      makeModel: 'Telent 4G',
      installDate: '2019',
      notes: 'Upgraded from Puffin Crossing, Microsense LSH, Installed: Early 2000s'
    },
	  
    {
      id: 'PUF-005',
      name: 'Crosby Main Road',
	  type: 'Puffin Crossing',
      latlng: '54.18402809005726, -4.566488428599731',
      makeModel: 'Telent 4G',
      installDate: 'November 2019',
      notes: ''
    },
	  
    {
      id: 'PUF-006',
      name: 'Braddan Road',
	  type: 'Puffin Crossing',
      latlng: '54.1652555147837, -4.506586200148645',
      makeModel: 'Telent 4G',
      installDate: 'September 2021',
      notes: ''
    },
	  
    {
      id: 'PUF-007',
      name: 'Broadway',
	  type: 'Puffin Crossing',
      latlng: '54.157331114884734, -4.477459334455583',
      makeModel: 'Telent 4G',
      installDate: '2020',
      notes: ''
    },
	  
    {
      id: 'PUF-008',
      name: 'Bucks Road',
	  type: 'Puffin Crossing',
      latlng: '54.152331071312126, -4.483723613551165',
      makeModel: 'TSEU 3G',
      installDate: '2006',
      notes: ''
    },
	  
    {
      id: 'PUF-009',
      name: 'Central Promenade',
	  type: 'Puffin Crossing',
      latlng: '54.161008825874596, -4.473448974915279',
      makeModel: 'Telent 4G',
      installDate: '2018',
      notes: 'Upgraded from Microsense LSH'
    },
	  
    {
      id: 'PUF-010',
      name: 'Central Promenade',
	  type: 'Puffin Crossing',
      latlng: '54.16439326759755, -4.468012226638203',
      makeModel: 'Telent 4G',
      installDate: '2018',
      notes: 'Upgraded from Microsense MSH'
    },
	  
    {
      id: 'PUF-011',
      name: 'Glencrutchery Road',
	  type: 'Puffin Crossing',
      latlng: '54.166754259529704, -4.480591739049569',
      makeModel: 'TSEU 3G',
      installDate: '2007',
      notes: ''
    },
	  
    {
      id: 'PUF-012',
      name: 'Glencrutchery Road',
	  type: 'Puffin Crossing',
      latlng: '54.16899721445149, -4.475393548204734',
      makeModel: 'TSEU 3G',
      installDate: '2010s',
      notes: ''
    },
	  
    {
      id: 'PUF-013',
      name: 'Johnny Wattersons Lane',
	  type: 'Puffin Crossing',
      latlng: '54.169330921603745, -4.49429297277913',
      makeModel: 'Telent 4G',
      installDate: 'August 2024',
      notes: ''
    },
	  
    {
      id: 'PUF-014',
      name: 'Lord St',
	  type: 'Puffin Crossing',
      latlng: '54.148408654639155, -4.480681072994766',
      makeModel: 'Telent 4G',
      installDate: '2014',
      notes: ''
    },
	  
    {
      id: 'PUF-015',
      name: 'New Castletown Rd',
	  type: 'Puffin Crossing',
      latlng: '54.154771312709926, -4.505860093451185',
      makeModel: 'TSEU 3G',
      installDate: '2009',
      notes: 'Upgraded from Zebra Crossing'
    },
	  
    {
      id: 'PUF-016',
      name: 'Peel Rd',
	  type: 'Puffin Crossing',
      latlng: '54.1537200156712, -4.500870170009536',
      makeModel: 'TSEU 3G',
      installDate: '2015',
      notes: 'Upgraded from Pelican Crossing, Mellors, Install date: Unknown'
    },
	  
    {
      id: 'PUF-017',
      name: 'Peveril Square',
	  type: 'Puffin Crossing',
      latlng: '54.14857914266342, -4.474826926358633',
      makeModel: 'Telent 4G',
      installDate: '2014',
      notes: 'Upgraded from Puffin Crossing, Microsense LSH, Install date: Late 1990s'
    },
	  
    {
      id: 'PUF-018',
      name: 'Prospect Hill',
	  type: 'Puffin Crossing',
      latlng: '54.14999556395413, -4.480734194124759',
      makeModel: 'TSEU 3G',
      installDate: '2015',
      notes: 'Upgraded from Pelican Crossing, Mellors, Install date: Unknown'
    },
	  
    {
      id: 'PUF-019',
      name: 'Victoria Road',
	  type: 'Puffin Crossing',
      latlng: '54.17088984129304, -4.468984359099058',
      makeModel: 'Telent 4G',
      installDate: '2023',
      notes: 'Upgraded from Zebra Crossing, Install date: Unknown'
    },
	  
    {
      id: 'PUF-020',
      name: 'Victoria Street',
	  type: 'Puffin Crossing',
      latlng: '54.14930447130379, -4.4785352464591215',
      makeModel: 'Telent 4G',
      installDate: 'August 2018',
      notes: 'Upgraded from Pelican Crossing, Mellors, Install date: Unknown'
    },
	  
    {
      id: 'PUF-021',
      name: 'Lord Street',
	  type: 'Puffin Crossing',
      latlng: '54.14845818680379, -4.478804639701705',
      makeModel: 'Telent 4G',
      installDate: 'August 2020',
      notes: 'Upgraded from Puffin Crossing, TSEU 3G, Install date: 2010 <br> Upgraded from Puffin Crossing, Microsense MSH, Install date: Late 1990s '
    },
	  
    {
      id: 'PUF-022',
      name: 'Strang Road',
	  type: 'Puffin Crossing',
      latlng: '54.173342907623926, -4.5119919529247445',
      makeModel: 'Telent 4G',
      installDate: 'December 2024',
      notes: ''
    },
	  
    {
      id: 'PUF-023',
      name: 'Main Road',
	  type: 'Puffin Crossing',
      latlng: '54.28417751719925, -4.5867730771960975',
      makeModel: 'Telent 4G',
      installDate: '2021',
      notes: ''
    },
	  
    {
      id: 'PUF-024',
      name: 'New Road',
	  type: 'Puffin Crossing',
      latlng: '54.23087822586212, -4.406396389737155',
      makeModel: 'Microsense LSH (Retrofitted with TSEU 3G Aspects)',
      installDate: 'Early 2000s',
      notes: ''
    },
	  
    {
      id: 'PUF-025',
      name: 'Main Road',
	  type: 'Puffin Crossing',
      latlng: '54.173956470572875, -4.456158670722983',
      makeModel: 'TSEU 3G',
      installDate: 'Early 2010s',
      notes: ''
    },
	  
    {
      id: 'PUF-026',
      name: 'Whitebridge Road',
	  type: 'Puffin Crossing',
      latlng: '54.176318142595875, -4.451673990842418',
      makeModel: 'Telent 4G',
      installDate: 'March 2018',
      notes: 'Upgraded from Microsense LSH, Install Date: Early 2000s'
    },
	  
    {
      id: 'PUF-027',
      name: 'Whitebridge Road',
	  type: 'Puffin Crossing',
      latlng: '54.176318142595875, -4.451673990842418',
      makeModel: 'Telent 4G',
      installDate: 'March 2018',
      notes: 'Upgraded from Microsense LSH, Install Date: Early 2000s'
    },
	  
    {
      id: 'PUF-028',
      name: 'Derby Road',
	  type: 'Puffin Crossing',
      latlng: '54.22177005679121, -4.687799122858962',
      makeModel: 'TSEU 3G',
      installDate: '2010s',
      notes: 'Upgraded from Mellors, Install Date: Early 1990s'
    },
	  
    {
      id: 'PUF-029',
      name: 'Castletown Road',
	  type: 'Puffin Crossing',
      latlng: '54.084490940714474, -4.745793462344455',
      makeModel: 'Telent 4G',
      installDate: '2010s',
      notes: 'Upgraded from Microsense LSH, Install Date: Late 1990s'
    },
	  
    {
      id: 'PUF-030',
      name: 'Station Road',
	  type: 'Puffin Crossing',
      latlng: '54.07785712418918, -4.7397593574702395',
      makeModel: 'TSEU 3G',
      installDate: '2010s',
      notes: 'Upgraded from Pelican Crossing, PAGE Mellors, Install Date: Unknown'
    },
	  
    {
      id: 'PUF-031',
      name: 'Albert Terrace',
	  type: 'Puffin Crossing',
      latlng: '54.32062306993022, -4.384529748677391',
      makeModel: 'TSEU 3G',
      installDate: '2010s',
      notes: 'Upgraded from Siemens Mellors, Install Date: Early 2000s'
    },
	  
    {
      id: 'PUF-032',
      name: 'Bowring Road',
	  type: 'Puffin Crossing',
      latlng: '54.32494022481929, -4.388400864370591',
      makeModel: 'TSEU 3G',
      installDate: '2010',
      notes: 'Upgraded from Pelican Crossing, Mellors, Install Date: Unknown'
    },
	  
    {
      id: 'PUF-033',
      name: 'Lezayre Road',
	  type: 'Puffin Crossing',
      latlng: '54.32113694737449, -4.391264804028194',
      makeModel: 'Telent 4G',
      installDate: 'August 2018',
      notes: 'Upgraded from TSEU 3G, Install Date: 2009 <br> Upgraded from Zebra Crossing, Install Date: Unknown'
    },
	  
    {
      id: 'PUF-034',
      name: 'Airport Access Road',
	  type: 'Puffin Crossing',
      latlng: '54.08932704488995, -4.633298764074955',
      makeModel: 'Telent 4G',
      installDate: 'April 2017',
      notes: 'Upgraded from Pelican Crossing, Mellors, Install Date: Unknown'
    },
	  
    {
      id: 'PUF-035',
      name: 'Main Road',
	  type: 'Puffin Crossing',
      latlng: '54.203197695418105, -4.640807168026267',
      makeModel: 'Telent 4G',
      installDate: '2010s',
      notes: 'Upgraded from Mellors, Install Date: Late 1990s'
    },
	  
    {
      id: 'PUF-036',
      name: 'Cooil Road',
	  type: 'Puffin Crossing',
      latlng: '54.152365772510144, -4.534727075415748',
      makeModel: 'Telent 4G',
      installDate: 'July 2023',
      notes: ''
    },
	  
    {
      id: 'PUF-037',
      name: 'Loch Promenade',
	  type: 'Puffin Crossing',
      latlng: '54.15254491606796, -4.47826679325149',
      makeModel: 'Telent 4G',
      installDate: '2018',
      notes: ''
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
      iconUrl: 'icons/Puffin.svg',
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

