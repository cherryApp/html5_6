// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {

    console.log("initmap started");

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({
        map: map
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // infoWindow.setPosition(pos);
            // infoWindow.setContent('Itt vagyok, sziasztok.');
            map.setCenter(pos);

            // Saját jelölő.
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Jelenlegi pozícióm!'
            });

        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

// Késleltetett megjelenítés.
function showModal() {
    $("#myModal").modal("show");
}
setTimeout(showModal, 5000);

// Popover beállítása.
$('#popover1').popover();

// A folyamat állása.
function changeProgress(progress) {

    if (!progress) {
        progress = document.querySelector(".progress-value").value;
    }

    // Reguláris kifejezéssel eltávolítjuk a nem kívánt karaktereket.
    progress = progress.replace(/,/g, ".");
    progress = progress.replace(/[^0-9\.]/g, "");

    progress = parseFloat(progress);
    if (!progress || isNaN(progress))
        return;

    var bar = document.querySelector(".progress .progress-bar");
    bar.style.width = progress + "%";

}