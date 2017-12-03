(function(){
	console.log("It's working!");

})();
function initMap() 
{
  var toronto = {lat: 43.6532, lng: -79.3832};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: toronto
  });
  var marker = new google.maps.Marker({
    position: toronto,
    map: map
  });
}