var map;
var marker = false; 
        
function initMap() {
    var centerOfMap = new google.maps.LatLng(23.2, 77.4);
    var options = {
      center: centerOfMap,
      zoom: 7
    };
    map = new google.maps.Map(document.getElementById('map'), options);
    google.maps.event.addListener(map, 'click', function(event) {                
        
        var clickedLocation = event.latLng;
        
        if(marker === false){
            
            marker = new google.maps.Marker({
                position: clickedLocation,
                map: map,
                draggable: true 
            });
            
            google.maps.event.addListener(marker, 'dragend', function(event){
                markerLocation();
            });
        } else{
            
            marker.setPosition(clickedLocation);
        }
     
        markerLocation();
    });
}
        
function markerLocation(){
    
    var currentLocation = marker.getPosition();
    
    document.getElementById('lat').value = currentLocation.lat(); //latitude
    document.getElementById('lng').value = currentLocation.lng(); //longitude
}

google.maps.event.addDomListener(window, 'load', initMap);