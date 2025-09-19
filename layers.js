console.log('✅ layers.js loaded');

// Object to hold each toggleable layer
const overlayLayers = {};

// Utility: Wrap a signal-adding function into a LayerGroup
function wrapLayer(fn) {
  const group = L.layerGroup();

  // Intercept marker additions
  const originalAddTo = L.Marker.prototype.addTo;
  L.Marker.prototype.addTo = function () {
    group.addLayer(this);
    return this;
  };

  // Call the module function
  try {
    fn(window.map);
  } catch (err) {
    console.warn(`⚠️ Error calling layer function:`, err);
  }

  // Restore original method
  L.Marker.prototype.addTo = originalAddTo;

  return group;
}

// Wrap each known module function with icon-enhanced labels

overlayLayers['<img src="icons/Equestrian.svg" width="16" style="vertical-align:middle;"> Equestrian Crossings (EQU)'] = wrapLayer(addEquestrian);
overlayLayers['<img src="icons/LiftingBridge.svg" width="16" style="vertical-align:middle;"> Lift Bridges (LIF)'] = wrapLayer(addLiftBridge);
overlayLayers['<img src="icons/Pelican.svg" width="16" style="vertical-align:middle;"> Pelican Crossings (PEL)'] = wrapLayer(addPelican);
overlayLayers['<img src="icons/Puffin.svg" width="16" style="vertical-align:middle;"> Puffin Crossings (PUF)'] = wrapLayer(addPuffin);
overlayLayers['<img src="icons/RN.svg" width="16" style="vertical-align:middle;"> Road Narrows (RN)'] = wrapLayer(addRoadNarrows);
overlayLayers['<img src="icons/SCJ.svg" width="16" style="vertical-align:middle;"> Signal Controlled Junctions (SCJ)'] = wrapLayer(addSignalControlledJunctions);
overlayLayers['<img src="icons/Toucan.svg" width="16" style="vertical-align:middle;"> Toucan Crossings (TOU)'] = wrapLayer(addToucan);
overlayLayers['<img src="icons/Tram.svg" width="16" style="vertical-align:middle;"> Tram Crossings (TRA)'] = wrapLayer(addTram);
overlayLayers['<img src="icons/Zebra.svg" width="16" style="vertical-align:middle;"> Zebra Crossings (ZEB)'] = wrapLayer(addZebra);

// Add the layer control to the map
L.control.layers(null, overlayLayers, { collapsed: false }).addTo(window.map);
