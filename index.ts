/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

let map: google.maps.Map;
let service: google.maps.places.PlacesService;
let infowindow: google.maps.InfoWindow;

function initMap(): void {
  const delaware = new google.maps.LatLng(38.9108, -75.5277);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: delaware,
    zoom: 11,
  });
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
  });

  let markers = [];
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

function placeMarker(location) {
  var markerType = document.querySelector('input[name="markerType"]:checked').value;
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: getMarkerIcon(markerType)
  });
}
function getMarkerIcon(markerType) {
  switch (markerType) {
    case 'red':
      return 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
    case 'blue':
      return 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    case 'green':
      return 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
    case 'purple':
      return 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png';
    default:
      return 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
  }
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
