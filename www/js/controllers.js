angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})


.controller('HomeController', function($scope, $stateParams) {

})
.controller('MapController', function($scope, $stateParams) {
navigator.geolocation.getCurrentPosition(showPosition);

    function showPosition(position) {
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
            center: latLng
            , zoom: 15
            , mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapBIG"), mapOptions);
        google.maps.event.addListenerOnce(map, 'idle', function () {
            var marker = new google.maps.Marker({
                map: map
                , animation: google.maps.Animation.DROP
                , position: latLng
            });
            var infoWindow = new google.maps.InfoWindow({
                content: "Here I am!"
            });
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
            google.maps.event.addListener(map, 'click', function (event) {
                var marker = new google.maps.Marker({
                    position: event.latLng,
                    map: map
                });
            });
        });
    }
})

.controller('TipsController', function($scope, $stateParams) {

})

.controller('BrowseController', function($scope, $stateParams) {
    navigator.geolocation.getCurrentPosition(showPosition);

    function showPosition(position) {
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
            center: latLng
            , zoom: 15
            , mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        google.maps.event.addListenerOnce(map, 'idle', function () {
            var marker = new google.maps.Marker({
                map: map
                , animation: google.maps.Animation.DROP
                , position: latLng
            });
            var infoWindow = new google.maps.InfoWindow({
                content: "Here I am!"
            });
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
            google.maps.event.addListener(map, 'click', function (event) {
                var marker = new google.maps.Marker({
                    position: event.latLng,
                    map: map
                });
            });
        });
    }


});
