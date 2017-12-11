// var map;
// function initMap() {
//         var uluru = {lat: -25.363, lng: 131.044};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
// };

// navigator.geolocation.getCurrentPosition(function(pos){
//   var myLat = pos.coords.latitude;
//   var myLon = pos.coords.longitude;
//   var myCenter = {lat: myLat, lng: myLon};
//   initMap(myCenter);
// });

function initMap(){
  navigator.geolocation.getCurrentPosition(function(pos){
    var myLat = pos.coords.latitude;
    var myLon = pos.coords.longitude;
    var myCenter = {lat: myLat, lng: myLon};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myCenter,
      zoom: 8
    });

  })
}
