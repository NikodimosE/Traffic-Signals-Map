console.log('✅ Signals.js loaded');

function addZebra(map) {
  const signals = [
    {
      id: 'ZEB-000',
      name: 'Bride Road',
	  type: 'Zebra Crossing',
      latlng: '54.36796234969052, -4.4434782221681415',
      notes: ''
    },
	  
    {
      id: 'ZEB-001',
      name: 'Ballasalla Village',
	  type: 'Zebra Crossing',
      latlng: '54.09794679121449, -4.630619544995285',
      notes: ''
    },
	  
    {
      id: 'ZEB-002',
      name: 'Bowling Green Road',
	  type: 'Zebra Crossing',
      latlng: '54.07780450315003, -4.645392128773507',
      notes: ''
    },
	  
    {
      id: 'ZEB-003',
      name: 'Shore Road',
	  type: 'Zebra Crossing',
      latlng: '54.07777246541692, -4.644943471237361',
      notes: ''
    },
	  
    {
      id: 'ZEB-004',
      name: 'Annacur Lane',
	  type: 'Zebra Crossing',
      latlng: '54.15101402831198, -4.51598809304116',
      notes: ''
    },
	  
    {
      id: 'ZEB-005',
      name: 'Ballanard Road',
	  type: 'Zebra Crossing',
      latlng: '54.17053677083826, -4.489042485554218',
      notes: ''
    },
	  
    {
      id: 'ZEB-006',
      name: 'Ballanard Road',
	  type: 'Zebra Crossing',
      latlng: '54.16690711295707, -4.485559250664306',
      notes: ''
    },
	  
    {
      id: 'ZEB-007',
      name: 'Ballquayle Road',
	  type: 'Zebra Crossing',
      latlng: '54.16427891021792, -4.483496472363085',
      notes: ''
    },
	  
    {
      id: 'ZEB-008',
      name: 'Bath Place',
	  type: 'Zebra Crossing',
      latlng: '54.14821374164161, -4.47560555986675',
      notes: ''
    },
	  
    {
      id: 'ZEB-009',
      name: 'Central Promenade',
	  type: 'Zebra Crossing',
      latlng: '54.15741973556471, -4.476812416337031',
      notes: ''
    },
	  
    {
      id: 'ZEB-010',
      name: 'Central Promenade',
	  type: 'Zebra Crossing',
      latlng: '54.15918342136539, -4.47535239926989',
      notes: ''
    },
	  
    {
      id: 'ZEB-011',
      name: 'Derby Road',
	  type: 'Zebra Crossing',
      latlng: '54.15734535539653, -4.482619053498087',
      notes: ''
    },
	  
    {
      id: 'ZEB-012',
      name: 'Hailwood Avenue',
	  type: 'Zebra Crossing',
      latlng: '54.177692216906294, -4.474638279177027',
      notes: ''
    },
	  
    {
      id: 'ZEB-013',
      name: 'Hailwood Avenue',
	  type: 'Zebra Crossing',
      latlng: '54.17912472712758, -4.4780821876310375',
      notes: ''
    },
	  
    {
      id: 'ZEB-014',
      name: 'Harris Promenade',
	  type: 'Zebra Crossing',
      latlng: '54.155066186834276, -4.47802845381386',
      notes: ''
    },
	  
    {
      id: 'ZEB-015',
      name: 'Harris Promenade',
	  type: 'Zebra Crossing',
      latlng: '54.15634147451169, -4.4776145255975495',
      notes: ''
    },
	  
    {
      id: 'ZEB-016',
      name: 'Loch Promenade',
	  type: 'Zebra Crossing',
      latlng: '54.14951324364374, -4.4764982418342525',
      notes: ''
    },
	  
    {
      id: 'ZEB-017',
      name: 'Loch Promenade',
	  type: 'Zebra Crossing',
      latlng: '54.15017831992663, -4.47732394871187',
      notes: ''
    },
	  
    {
      id: 'ZEB-018',
      name: 'Loch Promenade',
	  type: 'Zebra Crossing',
      latlng: '54.15129221890425, -4.477896872585147',
      notes: ''
    },
	  
    {
      id: 'ZEB-020',
      name: 'Loch Promenade',
	  type: 'Zebra Crossing',
      latlng: '54.15375907748874, -4.478330907565663',
      notes: ''
    },
	  
    {
      id: 'ZEB-021',
      name: 'Old Catletown Road',
	  type: 'Zebra Crossing',
      latlng: '54.14618214495687, -4.4847981608354806',
      notes: ''
    },
	  
    {
      id: 'ZEB-022',
      name: 'Saddlestone Road',
	  type: 'Zebra Crossing',
      latlng: '54.1568566532226, -4.507999846437751',
      notes: ''
    },
	  
    {
      id: 'ZEB-023',
      name: 'Snaefell Road',
	  type: 'Zebra Crossing',
      latlng: '54.17136065105957, -4.483484370359169',
      notes: ''
    },
	  
    {
      id: 'ZEB-024',
      name: 'Waverly Terrace',
	  type: 'Zebra Crossing',
      latlng: '54.16017260506028, -4.481685750574469',
      notes: ''
    },
	  
    {
      id: 'ZEB-025',
      name: 'Woodbourne Road',
	  type: 'Zebra Crossing',
      latlng: '54.15756765129896, -4.486380392868711',
      notes: ''
    },
	  
    {
      id: 'ZEB-026',
      name: 'Pulrose Road',
	  type: 'Zebra Crossing',
      latlng: '54.14933717831268, -4.50561244705246',
      notes: ''
    },
	  
    {
      id: 'ZEB-027',
      name: 'Ballemenagh Road',
	  type: 'Zebra Crossing',
      latlng: '54.35865344394052, -4.5185350795697845',
      notes: ''
    },
	  
    {
      id: 'ZEB-028',
      name: 'Ballemenagh Road',
	  type: 'Zebra Crossing',
      latlng: '54.35865344394052, -4.5185350795697845',
      notes: ''
    },
	  
    {
      id: 'ZEB-029',
      name: 'Main Road Road',
	  type: 'Zebra Crossing',
      latlng: '54.281979050791065, -4.587939756417417',
      notes: ''
    },
	  
    {
      id: 'ZEB-030',
      name: 'Main Road Road',
	  type: 'Zebra Crossing',
      latlng: '54.28659115650541, -4.583505652414302',
      notes: ''
    },
	  
    {
      id: 'ZEB-031',
      name: 'New Road',
	  type: 'Zebra Crossing',
      latlng: '54.233455269140684, -4.406075361038832',
      notes: ''
    },
	  
    {
      id: 'ZEB-032',
      name: 'Avondale Road',
	  type: 'Zebra Crossing',
      latlng: '54.17513507464822, -4.456534320453877',
      notes: ''
    },
	  
    {
      id: 'ZEB-033',
      name: 'Hilberry Road',
	  type: 'Zebra Crossing',
      latlng: '54.17624352047702, -4.45987298747586',
      notes: ''
    },
	  
    {
      id: 'ZEB-034',
      name: 'Main Road',
	  type: 'Zebra Crossing',
      latlng: '54.17572765839992, -4.452730010236933',
      notes: ''
    },
	  
    {
      id: 'ZEB-035',
      name: 'Shore Road',
	  type: 'Zebra Crossing',
      latlng: '54.224023573334186, -4.694413498297462',
      notes: ''
    },
	  
    {
      id: 'ZEB-036',
      name: 'Shore Road',
	  type: 'Zebra Crossing',
      latlng: '54.22426563836372, -4.696001166926053',
      notes: ''
    },
	  
    {
      id: 'ZEB-037',
      name: 'Castletown Road',
	  type: 'Zebra Crossing',
      latlng: '54.08409461052345, -4.743316011246787',
      notes: ''
    },
	  
    {
      id: 'ZEB-037',
      name: 'Church Road',
	  type: 'Zebra Crossing',
      latlng: '54.08471695967453, -4.7436375129900865',
      notes: ''
    },
	  
    {
      id: 'ZEB-038',
      name: 'Four Roads',
	  type: 'Zebra Crossing',
      latlng: '54.083927234730886, -4.7441237844813955',
      notes: ''
    },
	  
    {
      id: 'ZEB-039',
      name: 'Station Road',
	  type: 'Zebra Crossing',
      latlng: '54.08531836283336, -4.758086051851019',
      notes: 'Upgraded from Puffin Crossing, TSEU 3G, Install Date:Late 2000s, <br> Upgraded from Pelican Crossing, Mellors, Install Date:Unknown'
    },
	  
    {
      id: 'ZEB-040',
      name: 'Albert Road',
	  type: 'Zebra Crossing',
      latlng: '54.321075385510184, -4.383829893992791',
      notes: ''
    },
	  
    {
      id: 'ZEB-041',
      name: 'Bircham Avenue',
	  type: 'Zebra Crossing',
      latlng: '54.32271831336518, -4.38948896171535',
      notes: ''
    },
	  
    {
      id: 'ZEB-042',
      name: 'Bowring Road',
	  type: 'Zebra Crossing',
      latlng: '54.328319945195894, -4.391300163278067',
      notes: ''
    },
	  
    {
      id: 'ZEB-043',
      name: 'Derby Road',
	  type: 'Zebra Crossing',
      latlng: '54.32360622377848, -4.38732246060722',
      notes: ''
    },
	  
    {
      id: 'ZEB-044',
      name: 'Market Place',
	  type: 'Zebra Crossing',
      latlng: '54.32184293365436, -4.379591794537975',
      notes: ''
    },
	  
    {
      id: 'ZEB-045',
      name: 'Parliament Street',
	  type: 'Zebra Crossing',
      latlng: '54.32226097496849, -4.3862177275133405',
      notes: ''
    },
	  
    {
      id: 'ZEB-046',
      name: 'Queens Promenade',
	  type: 'Zebra Crossing',
      latlng: '54.31919321251468, -4.3757683161297285',
      notes: ''
    },
	  
    {
      id: 'ZEB-047',
      name: 'Waterloo Road',
	  type: 'Zebra Crossing',
      latlng: '54.320816406311764, -4.381517677492451',
      notes: ''
    },
	  
    {
      id: 'ZEB-048',
      name: 'West Quay',
	  type: 'Zebra Crossing',
      latlng: '54.3223282085461, -4.382279468776386',
      notes: ''
    },
  ];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

  signals.forEach(signal => {
    const [lat, lng] = signal.latlng.split(',').map(coord => Number(coord.trim()));

    const popupText = `
      <strong>${signal.name}</strong><br><br>
      <strong>Crossing Type:</strong><br>${signal.type}<br>
      <strong>Notes:</strong><br>${signal.notes}
    `;

    const icon = L.icon({
      iconUrl: 'icons/Zebra.svg',
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
