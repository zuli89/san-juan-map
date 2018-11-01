import React, { Component } from 'react';
import './App.css';
import {load_google_maps, load_places} from './utils'


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

      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        //scrollwheel: true,
        center: { lat: venues[3].location.lat, lng: venues[3].location.lng }
      });

      venues.forEach(venue => { //create marker for each venue
        let marker = new google.maps.Marker({
          position: { lat: venue.location.lat, lng: venue.location.lng },
          map: this.map,
          venue: venue,
          id: venue.id,
          name: venue.name,
          animation: google.maps.Animation.DROP
        });
      });
    })
  }
  


  render() {
    return (
      <div id="map">
        
      </div>
    );
  }
}

export default App;


