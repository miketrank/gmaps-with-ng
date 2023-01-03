import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from 'google.maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'Google Maps API in Angular Framework';

  @ViewChild('nggooglemap') mapDivElement: any;

  googleMap: any;      // will be set to be a "google.maps.Map" object
  googleMapMarker: any;    // will be set to be a "google.maps.Marker" object
  googleMapMarkerInfoWindow: any;   // will be set to be a "google.maps.InfoWindow" object


  ngAfterViewInit() {

    const mapProperties = {
      center: new google.maps.LatLng(26.2647577, -80.097421),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.googleMap = new google.maps.Map(this.mapDivElement.nativeElement, mapProperties);
    this.googleMapMarker = new google.maps.Marker({position: new google.maps.LatLng(26.2469577,-80.087821), map: this.googleMap});
    this.googleMapMarkerInfoWindow = new google.maps.InfoWindow({ content: "<br>Mike's House</br>" });
    this.googleMapMarkerInfoWindow.open({ anchor: this.googleMapMarker, map: this.googleMap, shouldFocus: false });

  }

}
