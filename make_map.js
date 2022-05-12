function makeMap(map, options) {
  // Map background
  var osmAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var streets = L.tileLayer(osmUrl, {attribution: osmAttr});
  streets.addTo(map);

  var hikeIcon = L.icon({
      iconUrl: '/fontawesome-free-6.1.1-web/svgs/solid/person-hiking.svg',
      iconSize:     [24, 48], // size of the icon
      iconAnchor:   [12, 24], // point of the icon which will correspond to marker's location
  });
  
  var bikeIcon = L.icon({
      iconUrl: '/fontawesome-free-6.1.1-web/svgs/solid/person-biking.svg',
      iconSize:     [40, 80], // size of the icon
      iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  });
  
  var kayakIcon = L.icon({
      iconUrl: '/fontawesome-free-6.1.1-web/svgs/solid/ship.svg',
      iconSize:     [40, 80], // size of the icon
      iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  });
  
  var skiIcon = L.icon({
      iconUrl: '/fontawesome-free-6.1.1-web/svgs/solid/person-skiing-nordic.svg',
      iconSize:     [40, 80], // size of the icon
      iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  });
  
  // Hike
  var hikes = L.layerGroup();
  
  L.marker([41.17593,-74.12444], {icon: hikeIcon}).bindPopup("<b>Engagement!</b><br>Get enganged here.").addTo(hikes);
  
  // Bike
  var bikes = L.layerGroup();
  
  L.marker([41.0712,-73.8930], {icon: bikeIcon}).bindPopup("<b>Tappan Zee Bridge path</b><br>Bike from Tarrytown to Nyack or Piermont.").addTo(bikes);
  
  L.marker([41.13991,-73.9074], {icon: bikeIcon}).bindPopup("<b>Nyack Beach State Park</b><br>Hike or bike Nyack beach state park.").addTo(bikes);
  
  
  // Kayak
  var kayaks = L.layerGroup();
  
  L.marker([41.18545,-73.87986], {icon: kayakIcon}).bindPopup("<b>Croton River</b><br>Kayak the Croton River.").addTo(kayaks);
  
  // Ski
  var skis = L.layerGroup();
  
  L.marker([41.46643,-73.82461], {icon: skiIcon}).bindPopup("<b>Fahnestock State Park</b><br><a href=\"/adventures/skiing/fahnestock\">Cross country ski Fahnestock State Park.</a>").addTo(skis);

  L.marker([41.7285,-74.2366], {icon: skiIcon}).bindPopup("<b>Lake Minnewaska</b><br><a href=\"/adventures/skiing/minnewaska\">Cross country ski Lake Minnewaska.</a>").addTo(skis);
 
  L.marker([41.10458,-73.84967], {icon: skiIcon}).bindPopup("<b>Rockefeller State Park</b><br><a href=\"/adventures/skiing/rockefeller\">Cross country ski Rockefeller State Park.</a>").addTo(skis);
  
  // On by default
  if (options.show_hikes) {
    hikes.addTo(map);
  }
  if (options.show_bikes) {
    bikes.addTo(map);
  }
  if (options.show_kayaks) {
    kayaks.addTo(map);
  }
  if (options.show_skis) {
    skis.addTo(map);
  }

  var overlays = {
      'Hikes': hikes,
      'Bike Rides': bikes,
      'Kayak': kayaks,
      'Ski': skis
  };
  
  var layerControl = L.control.layers(null, overlays).addTo(map);
  
  if (options.show_coords) {
    // Add a pop-up with the coordinates, for development
    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);
  }

  return map
}
