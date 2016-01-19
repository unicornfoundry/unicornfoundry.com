var locations = [/*[34.052234, -118.243685], [37.774929, -122.419416],*/ [40.712784, -74.005941], /*[42.360082, -71.058880]*/];

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