function initMap(){
  navigator.geolocation.getCurrentPosition(function(pos){
    var myLat = pos.coords.latitude;
    var myLon = pos.coords.longitude;
    var myCenter = {lat: myLat, lng: myLon};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myCenter,
      zoom: 8
    });
    var marker = new google.maps.Marker({
      position: myCenter,
      map: map
    });
  })
}
