//var mentors = [["Tim Lupo", 41.057319, -74.140977], ["Neel Patel-Shah", 40.940376, -74.131810], ["Joy Hsu", 33.816960, -118.037285]];
var students = [[41.057319, -74.140977], [37.548270, -121.988572], [40.006496, -75.703274], [36.974117, -122.030796]];

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(38, -95),
    zoom:4,
    scrollwheel: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
    
//var marker = new google.maps.Marker({ position: new google.maps.LatLng(41.0573, -74.1410), map: map ,icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'});
    
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var marker = new google.maps.Marker({
          position: {lat: student[0], lng: student[1]},
          map: map
        });
    }
    
    /*for (var i = 0; i < mentors.length; i++) {
        var mentor = mentors[i];
        var marker = new google.maps.Marker({
          position: {lat: mentor[1], lng: mentor[2]},
          map: map,
          icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
        });
    }*/
}
google.maps.event.addDomListener(window, 'load', initialize);