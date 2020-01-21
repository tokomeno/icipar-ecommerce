import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

interface MapComponentProps {
  children?: React.ReactNode;
}

export const MapComponent: React.FC<MapComponentProps> = ({ children }) => {
  return (
    <div className="map-content">
      <button className="map-btn">ჩვენი მაღაზიები</button>
      <div className="map-block" data-aos="fade-up">
        {/* <div id="map"></div> */}
        {/* <Map
          // google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        /> */}
      </div>
    </div>
  );
};

// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 16,
//     center: new google.maps.LatLng(-33.91722, 151.23064),
//     mapTypeId: "roadmap",
//     icon: "images/mapmarker.svg",
//     styles: [
//       {
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#f5f5f5"
//           }
//         ]
//       },
//       {
//         elementType: "labels.icon",
//         stylers: [
//           {
//             visibility: "off"
//           }
//         ]
//       },
//       {
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#616161"
//           }
//         ]
//       },
//       {
//         elementType: "labels.text.stroke",
//         stylers: [
//           {
//             color: "#f5f5f5"
//           }
//         ]
//       },
//       {
//         featureType: "administrative.land_parcel",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#bdbdbd"
//           }
//         ]
//       },
//       {
//         featureType: "poi",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#eeeeee"
//           }
//         ]
//       },
//       {
//         featureType: "poi",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#757575"
//           }
//         ]
//       },
//       {
//         featureType: "poi.park",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#e5e5e5"
//           }
//         ]
//       },
//       {
//         featureType: "poi.park",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#9e9e9e"
//           }
//         ]
//       },
//       {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#ffffff"
//           }
//         ]
//       },
//       {
//         featureType: "road.arterial",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#757575"
//           }
//         ]
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#dadada"
//           }
//         ]
//       },
//       {
//         featureType: "road.highway",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#616161"
//           }
//         ]
//       },
//       {
//         featureType: "road.local",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#9e9e9e"
//           }
//         ]
//       },
//       {
//         featureType: "transit.line",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#e5e5e5"
//           }
//         ]
//       },
//       {
//         featureType: "transit.station",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#eeeeee"
//           }
//         ]
//       },
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#c9c9c9"
//           }
//         ]
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#9e9e9e"
//           }
//         ]
//       }
//     ]
//   });

//   var contentString =
//     '<div id="content" class="info-win">' +
//     '<div id="siteNotice">' +
//     "</div>" +
//     '<span id="firstHeading" class="firstHeading">GAMMA CONSULTING</span>' +
//     '<div id="bodyContent">' +
//     "<p>KANDELAKI STR 12 ";

//   // koordinatebi
//   var features = [
//     {
//       position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775)
//       // type: 'img1'
//     },
//     {
//       position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496)
//       // type: 'img1'
//     },
//     {
//       position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587)
//       // type: 'img1'
//     }
//   ];

//   var infowindow = new google.maps.InfoWindow({
//     content: contentString
//   });
//   // Create markers.
//   features.forEach(function(feature) {
//     var marker = new google.maps.Marker({
//       position: feature.position,
//       icon: "images/mapmarker.svg",
//       map: map
//     });
//     marker.addListener("click", function() {
//       infowindow.open(map, marker);
//     });
//   });
// }
