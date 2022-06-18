import { Component } from '@angular/core';

import { GoogleMap } from '@capacitor/google-maps';


//import * as markers_ from 'src/assets/synthetic_markers.json';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  map: any;
  markers: any

  constructor() {}

  ngOnInit() {
    //this.markers = markers_["default"];
    this.initMap();
  }

  async initMap(){
    const apiKey = '';

    const mapRef = document.getElementById('map');

    this.map = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: mapRef, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8, // The initial zoom level to be rendered by the map
      },
    });

    //this.addMarkerCluster();
    
  }

  // async addMarkerCluster(){   
  //   console.log("running addMarkerCluster") 
  //   let spotsCoords = [], spotObject = [];

  //   for(let i = 0; i < this.markers.length; i++){
  //     // if(typeof spots[i].location.coordinates[0] != 'number' || typeof spots[i].location.coordinates[1] != 'number')
  //     //   console.log(spots[i].location.coordinates);
  //     let marker = {
  //       //position: new LatLng(spots[i].location.coordinates[1], spots[i].location.coordinates[0]),
  //       coordinate: {
  //         lat: this.markers[i].location.coordinates[1],
  //         lng: this.markers[i].location.coordinates[0]
  //       },
  //       // spotObject: spots[i]
  //     }
  //     spotsCoords.push(marker);
  //   }

  //   let results = await this.map.addMarkers(spotsCoords)
  //   await this.map.enableClustering();
  //   await this.map.setOnMarkerClickListener((marker) => {
  //     console.log(marker)
  //     console.log(spotObject[parseInt(marker.markerId)]._id)
  //     console.log(this.map)
  //     console.log("center", this.map.getZoom())
  //   })

  //   await this.map.setOnClusterClickListener((info) => {
  //     console.log(info)
  //     console.log(this.map)
  //   })

  //   console.log("add marker resulsts", results)

  // }


}
