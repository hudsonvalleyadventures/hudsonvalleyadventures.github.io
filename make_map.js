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
      iconUrl: '/fontawesome-free-6.1.1-web/svgs/solid/water.svg',
      iconSize:     [40, 80], // size of the icon
      iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  });
  
  var skiIcon = L.icon({
      iconUrl: '/fontawesome-free-6.1.1-web/svgs/solid/person-skiing-nordic.svg',
      iconSize:     [40, 80], // size of the icon
      iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  });
  
  var foodIcon = L.icon({
      iconUrl: '/fontawesome-free-6.1.1-web/svgs/solid/utensils.svg',
      iconSize:     [25, 50], // size of the icon
      iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  });

  // Hike
  var hikes = L.layerGroup();
 
  var coords;
  var text;

  coords = [41.17593,-74.12444];
  text = "<center><b>Harriman State Park - Reeves Meadow Visitors Center</b></center><br>";
  text += "A popular place to start hiking in the popular and expansive Harriman State Park is from the Reeves Meadow Visitor Center on Seven Lakes Drive, but there are many trailheads in Harriman State Park.<br><br>";
  text += "The <a href=\"https://www.hikingproject.com/trail/7025491/pine-meadow-lake-loop\">Pine Meadow Lake Loop</a> and <a href=\"https://www.hikingproject.com/trail/7025492/harriman-state-park-loop\">Harriman State Park Loop</a> are classic hikes in the area.<br><br>";
  text += "This is also a great area to get enganged!";
  L.marker(coords, {icon: hikeIcon}).bindPopup(text).addTo(hikes);
 
  coords = [41.39175, -74.11634];
  text = "<center><b>Schunnemunk State Park</b></center><br>";
  text += "Schunnemunk is a small park with steep climbs to great ridge hikes with panoramic views of the Hudson, the Shawangunk Ridge, and the Catskills.<br><br>";
  text += "See the <a href=\"https://parks.ny.gov/parks/184\">NY government website</a> for helpful information like trail conditions and maps.<br><br>";
  text += "See <a href=\"https://www.hikingproject.com/trail/7095609/schunnemunk-highlight-otterkill-to-megalith-loop\">Hiking Project</a> for hiking route ideas.";
  L.marker(coords, {icon: hikeIcon}).bindPopup(text).addTo(hikes);

  coords = [41.31285, -74.00631];
  text = "<center><b>Bear Mountain State Park</b></center><br>";
  text += "See the <a href=\"https://parks.ny.gov/parks/13\">NY government website</a> for helpful information like trail conditions and maps.<br><br>";
  text += "See <a href=\"https://www.hikingproject.com/trail/7023693/bear-mountain-loop\">Hiking Project</a> for hiking route ideas.";
  L.marker(coords, {icon: hikeIcon}).bindPopup(text).addTo(hikes);

  coords = [41.12077, -73.91812];
  text = "<center><b>Nyack Beach State Park</b></center><br>";
  text += "Hike <a href=\"https://parks.ny.gov/parks/156\">Nyack Beach State Park</a>.<br><br>";
  text += "We recommend hiking to the top of Hook Mountain and then making a loop by returning along the Nyack River Trail, find more details at <a href=\"https://www.hikingproject.com/trail/7089646/hook-mountain-nyack-beach-loop-rockland-lake-congers-upper-nyack\">Hiking Project</a>.";
  L.marker(coords, {icon: hikeIcon}).bindPopup(text).addTo(hikes);

  // Bike
  var bikes = L.layerGroup();
  
  coords = [41.0712,-73.8930];
  text = "<center><b>Tappan Zee Bridge path</b></center><br>";
  text += "Bike from Tarrytown to Nyack or Piermont on the <a href=\"https://mariomcuomobridge.ny.gov/visit-visitor-info\">Tappan Zee Bridge path</a>.<br><br>";
  text += "For longer rides, connect to the Joseph B. Clarke Rail Trail, Old Erie Path, and Raymond G. Esposito Trail (<a href=\"https://gothambiketours.com/riding-the-esposito-trail-and-the-old-erie-path\">click here</a> or <a href=\"https://bikeitorhikeit.org/joseph_b_clarke_rail_trail.htm\">click here</a> for more information).";
  L.marker(coords, {icon: bikeIcon}).bindPopup(text).addTo(bikes);
  
  coords = [41.13991,-73.9074];
  text = "<center><b>Nyack Beach State Park</b></center><br>";
  text += "Bike <a href=\"https://parks.ny.gov/parks/156\">Nyack Beach State Park</a>, <a href=\"https://parks.ny.gov/parks/81\">Rockland Lake State Park</a>, and <a href=\"https://www.palisadesparks.org/haverstraw-beach\">Haverstraw Beach State Park</a>.<br><br>";
  text += "A nice route is to connect the Nyack River Trail and Haverstraw River Trail to bike right along the Hudson under the palisades from Nyack to Haverstraw. You can also take a detour up to Rockland Lake.<br><br>";
  text += "For longer rides you can connect up with the Tappan Zee Bridge Path, as well as bike down to Piermont on the Raymond G. Esposito Trail, Old Erie Path, and Joseph B. Clarke Rail Trail.";
  L.marker(coords, {icon: bikeIcon}).bindPopup(text).addTo(bikes);
  
  // Kayak
  var kayaks = L.layerGroup();
  
  coords = [41.18545,-73.87986];
  text = "<center><b>Croton River</b></center><br>";
  text += "<a href=\"https://www.kayakhudson.com/croton-river-location\">Kayak the Croton River</a>. You can rent kayaks through <a href=\"https://www.kayakhudson.com/product/croton-river-rentals\">Hudson River Recreation</a>.<br><br>";
  text += "It is a relatively short paddle up the Croton River to Deer Island where you can get out and swim! The water is calm up until Deer Island where you will encounter rapids and will be forced to turn around. Keep an eye out for eagles, ducks, and crabs!";
  L.marker(coords, {icon: kayakIcon}).bindPopup(text).addTo(kayaks);
  
  // Ski
  var skis = L.layerGroup();
 
  coords = [41.46643,-73.82461];
  text = "<center><b>Fahnestock State Park</b></center><br>";
  text += "Cross country ski at Fahnestock State Park.<br><br>";
  text += "Find trail conditions and maps at the <a href=\"https://parks.ny.gov/parks/fahnestock\">NY state government website</a>.";
  L.marker(coords, {icon: skiIcon}).bindPopup(text).addTo(skis);

  coords = [41.7285,-74.2366];
  text = "<center><b>Lake Minnewaska</b></center><br>";
  text += "Lake Minnewaska is a popular cross country skiing destination with many miles of trails and incredible views from the Shawangunk Ridge. There is a fee for parking. Ask for a trail map from the parking attendants.<br><br>";
  text += "We recommend skiing to Lake Awosting via the Castle Point or Hamilton Point Carriage Roads (for experienced skiers) or via the Upper Awasting Carriage Road (for less experienced skiers).<br><br>";
  text += "We also recommend skiing around Lake Awosting if you have time, though the trails aren't always groomed so be prepared for skiing through powder! Wider skis such as cross country downhill skis can be useful for skiing around Lake Awosting when the trail isn't groomed.<br><br>";
  text += "See the <a href=\"https://parks.ny.gov/parks/minnewaska\">NY government website</a> for helpful information like trail conditions and maps.";
  L.marker(coords, {icon: skiIcon}).bindPopup(text).addTo(skis);
 
  coords = [41.10458,-73.84967];
  text = "<center><b>Rockefeller State Park</b></center><br>"
  text += "You can find trail maps at the <a href=\"https://parks.ny.gov/parks/rockefeller\">NY state government website</a>.<br><br>";
  text += "We recommend parking at <a href=\"https://www.google.com/maps/place/Gory+Brook+Rd,+Sleepy+Hollow,+NY+10591/@41.0907334,-73.8585247,17.88z/data=!4m5!3m4!1s0x89c2eaa76b8a2ef1:0x476626a075453432!8m2!3d41.0907187!4d-73.8573477\">Gory Brook Road</a>. From there you will have many options for places to ski, for example following the <a href=\"https://parks.ny.gov/parks/96\">Old Croton Aquaduct (OCA)</a> north, the Pocantico River Trail, or the Thirteen Bridges Loop.<br><br>"
  text += "Eagle Hill is a great destination with amazing views of the Hudson on a clear day! The descent is a bit steep so be prepared, either with enough cross country skiing experience or with metal edge (or cross country downhill) skis."
  L.marker(coords, {icon: skiIcon}).bindPopup(text).addTo(skis);
  
  var ski_harriman_coords = [41.23654, -74.07283];
  var ski_harriman_text = "<center><b>Harriman State Park</b></center><br>";
  ski_harriman_text += "Cross country ski in <a href=https://www.myharriman.com/cross-country-skiing-harriman-state-park-nice-n-snowy-lake-welch-drive>Harriman State Park.</a>";
  L.marker(ski_harriman_coords, {icon: skiIcon}).bindPopup(ski_harriman_text).addTo(skis);

  // Food
  var food = L.layerGroup();
  
  coords = [41.15656966954971, -74.1923937614128];
  text = "<center><b>The Village Blend</b></center><br>";
  text += "Get coffee and breakfast at <a href=\"https://www.yelp.com/biz/the-village-blend-sloatsburg-2\">The Village Blend</a> in Sloatsburg, NY.";
  L.marker(coords, {icon: foodIcon}).bindPopup(text).addTo(food);

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
  if (options.show_food) {
    food.addTo(map);
  }

  var overlays = {
      'Hikes': hikes,
      'Bike Rides': bikes,
      'Kayak': kayaks,
      'Ski': skis,
      'Food': food
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
