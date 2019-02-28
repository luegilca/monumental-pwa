//Global
var monuments = [];
const API_KEY = "AIzaSyC8R-YY2CjetypPOOGGZDKjrfsekASU6WI";

var monuments_photos = {
  '1': '../img/monuments/1.jpg',
  '2': '../img/monuments/2.jpg',
  '3': '../img/monuments/3.jpg',
}

var map;
var directionService;
var directionRenderer;
var modes = {
    "DRIVING":"DRIVING",
    "WALKING":"WALKING",
    "BICYCLING":"BICYCLING",
    "TRANSIT":"TRANSIT"
  };

var positionMarker;
var pos;
var bta = {lat: 4.624335, lng: -74.063644}
var markers = []

//Initialize Firebase
var config = {
  apiKey: "AIzaSyDXTZFAW5FJBrndTfydPX_K8OQjLu7C488",
  authDomain: "datos-dc-2018.firebaseapp.com",
  databaseURL: "https://datos-dc-2018.firebaseio.com",
  projectId: "datos-dc-2018",
  storageBucket: "datos-dc-2018.appspot.com",
  messagingSenderId: "364966521199"
};
// var config = {
//   apiKey: "AIzaSyBrlpibpfDag-kkWdO1SE_x6Yvj_0_Zj1A",
//   authDomain: "monumental-pwa.firebaseapp.com",
//   databaseURL: "https://monumental-pwa.firebaseio.com",
//   projectId: "monumental-pwa",
//   storageBucket: "monumental-pwa.appspot.com",
//   messagingSenderId: "662553488877"
// };
firebase.initializeApp(config);

const database = firebase.database();
// database.ref().on('value', function(d){
//   console.log( d.val( ) );
// })
// console.log( 'finished' );

function getMonuments() {
  return firebase.database().ref().on('value', function(snapshot) {
    console.log(snapshot.val())
    monuments = [];
    snapshot.val().map(item => {
      if(item.CLASIFICACION != "CAMPANA"){
        monuments.push(item)
      }

    for (var i = 0; i < monuments.length; i++) {
       var monument = monuments[i];
       //var url = "url('" + monument.url + "')";
       //$('.js-item'+i).find('js-image').data('' monuments_photos[i]);
       var itemHTML = $('.js-item-'+i);
       itemHTML.find('.js-id').text(monument.OBJECTID);
       itemHTML.data('title', monument.TITULO);
       itemHTML.data('lat', monument.LAT);
       itemHTML.data('lng', monument.LONG);
       itemHTML.data('id', monument.OBJECTID);
       itemHTML.data('image', monuments_photos[monument.OBJECTID]);
       itemHTML.data('text', monument.TEXTO);


       if (monument.enable) {
        itemHTML.find('.js-image').addClass('item-discover');
        itemHTML.find('.js-image').addClass('animated');
        itemHTML.find('.js-image').addClass('flipInY');
       }else{
        itemHTML.find('.js-image').removeClass('item-discover');
        itemHTML.find('.js-image').addClass('album-item');
       }
      }
    })
  })
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: bta
  });
  directionService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  // Try HTML5 geolocation.

  if (navigator.geolocation && !positionMarker) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
      positionMarker = new google.maps.Marker({
        position: pos,
        map: map
      });
    }, function() {
      console.log("not support");
    });
    } else {
    // Browser doesn't support Geolocation
    console.log("not support");
  }
}

function events_marker(marker,mode) {
	if (!(typeof marker === "undefined")){
		marker.addListener('click', function() {
		    getRoute(marker,mode);
		});
	}
}

function setCookie(value) {
  document.cookie = "currentPosition=" + value;
};

function getRoute( marker,mode){
	var originPoint = positionMarker.position;
	var request = {
	    origin: originPoint,
	    destination: marker.position,
	    travelMode: mode,
  	};
	directionsRenderer = new google.maps.DirectionsRenderer();
	directionsRenderer.setMap(map);
	directionsRenderer.setPanel(document.getElementById('directionsPanel'));
	directionService.route(request, function(result, status) {
	   console.log(status);
	   if (status == 'OK') {
	      directionsRenderer.setDirections(result);
	   }
  });
}

function makeMarkerImage( imageURL){
	var image = {
					url: imageURL,
					size: new google.maps.Size(40, 40),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(17, 34),
					scaledSize: new google.maps.Size(30, 30)
				}
	return image;
}

function addMarkersToMap( arrayMarkers ){
	for (var i = 0; i < arrayMarkers.length; i++) {
		if (!(typeof arrayMarkers[i]=== "undefined")) {
			arrayMarkers[i].setMap(map);
		}

	}
}

function removeMarkersFromMap( arrayMarkers ){
	for (var i = 0; i < arrayMarkers.length; i++) {
		if (!(typeof arrayMarkers[i]=== "undefined")) {
			arrayMarkers[i].setMap(null);
		}
	}
}

function scrollToSection(section) {
  var scrollElement = document.scrollingElement;
  var sectionTop = $('#'+ section).offset().top;
  var navHeight = $('.js-nav').outerHeight();
  $(scrollElement).animate({
    scrollTop: sectionTop
  }, 1000)
}

function eventListeners() {
  $('.js-monument').on('click',  function(){
    var monument = $(this);
    $('#map').addClass('no-visible');
    $("#directionsPanel").text('');
    $('.js-modal-title').text(monument.data('title'));
    $('.js-modal-id').text(monument.data('id'));
    $('.description').text(monument.data('text'));
    $('.js-modal').data('lat', monument.data('lat'));
    $('.js-modal').data('lng', monument.data('lng'));
    console.log(monument.data('image'));
    $('.js-modal-image').css('background-image', "url('" + monument.data('image') + "')");
  });

  $('.js-route').on('click', function() {
    var monument = $(this).closest('.js-modal');
    var route = $(this).data('transport');
    $("#directionsPanel").text('');
    $('#map').removeClass('no-visible');
    initMap();

    var lat =  monument.data('lat');
    var lng =  monument.data('lng');
    var mPos = { lat: lat, lng: lng};
    var monumentPos = new google.maps.Marker({
      position: { lat: lat, lng: lng},
      map: map
    });

    markers.push(monumentPos);
    getRoute(monumentPos,modes[route]);

    
    console.log (pos);
    console.log(mPos);
    console.log(geolocationValidation(monumentPos));
  })

  $('.js-section').on('click', function() {
    var section = $(this).data('section');
    scrollToSection(section);
  });
}

function geolocationValidation(monumentPos){
  var distance = google.maps.geometry.spherical.computeDistanceBetween (monumentPos.position, positionMarker.position);
  return distance;
}

var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(position1, position2) {
  var earthRadius = 6378137;
  var dLat = rad(position2.lat() - position1.lat());
  var dLong = rad(position2.lng() - position1.lng());
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(position1.lat())) * Math.cos(rad(position2.lat())) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = earthRadius * c;
  return d; // returns the distance in meter
};

$(document).ready(function(){
  getMonuments();
  eventListeners();
});
