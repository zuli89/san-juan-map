import React, { Component } from 'react';
import './App.css';
import {load_google_maps, load_places} from './utils'
import Sidebar from './components/Sidebar'


class App extends Component {
  componentDidMount() {
    let googleMaps = load_google_maps();
    let placesPromise = load_places();

    Promise.all([
      googleMaps,
      placesPromise
    ])

    .then(values => {
      let google = values[0]; //assign variable to google maps results from request  
      let venues = values[1].response.venues; //fourquare resutls variable from request
      console.log(google);

      this.google = google;
      this.markers = [];
      this.infowindow = new google.maps.InfoWindow();

      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: venues[0].location.lat, lng: venues[0].location.lng },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scrollwheel: true
      });

      venues.forEach(venue => { //create marker for each venue
        let marker = new google.maps.Marker({
          position: { lat: venue.location.lat, lng: venue.location.lng },
          map: this.map,
          venue: venue,
          id: venue.id,
          name: venue.name,
          animation: google.maps.Animation.DROP //need to check this
        });
        this.markers.push(this.markers);
        });
      })
  }
  
  


  render() {
    return (
    <div>

      <div id ='title'>
        <h1> San Juan Map </h1>
      </div>
      <Sidebar/>
      <div id="map">
      </div>

    </div>
    );
  }
}

export default App;


