var locations = [[40.945889, -74.068403]];

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(40, -95),
    zoom:3,
    scrollwheel: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("campMap"), mapProp);
    
    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var marker = new google.maps.Marker({
          position: {lat: location[0], lng: location[1]},
          map: map
        });
    }
}
google.maps.event.addDomListener(window, 'load', initialize);