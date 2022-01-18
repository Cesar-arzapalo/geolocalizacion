import { Component } from '@angular/core';
import {Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geolocalizacion';
  map:any;
  cordsLat: number = 0;
  cordsLon: number = 0;

  ngOnInit(): void {
    this.locate();
  }

  locate(): void {
    if(!navigator.geolocation) {
      console.log("No esta soportado la localizacion");
    }
 
    navigator.geolocation.getCurrentPosition( (position) => {
      this.cordsLat = position.coords.latitude;
      this.cordsLon = position.coords.longitude;
      console.log(
        `lat: ${this.cordsLat}, lon: ${this.cordsLon}`
      );
      this.map = new Map('map').setView([this.cordsLat, this.cordsLon], 17);
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
     
      marker([this.cordsLat, this.cordsLon]).addTo(this.map);
    });
  }

}
