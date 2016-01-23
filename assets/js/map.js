var mentors = [["Tim Lupo", 41.057319, -74.140977], ["Yasmeen Roumie", 40.712784, -74.005941], ["Caitlin Stanton", 40.712784, -74.005941]];
//var students = [[41.057319, -74.140977], [37.548270, -121.988572], [40.006496, -75.703274], [36.974117, -122.030796]];

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(38, -90),
    zoom:4,
    scrollwheel: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
    
//var marker = new google.maps.Marker({ position: new google.maps.LatLng(41.0573, -74.1410), map: map ,icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'});
    
    /*for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var marker = new google.maps.Marker({
          position: {lat: student[0], lng: student[1]},
          map: map
        });
    }*/
    
    for (var i = 0; i < mentors.length; i++) {
        var mentor = mentors[i];
        var marker = new google.maps.Marker({
          position: {lat: mentor[1], lng: mentor[2]},
          map: map
        });
    }
}
google.maps.event.addDomListener(window, 'load', initialize);