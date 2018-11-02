export function load_google_maps() {
  return new Promise(function(resolve, reject) {
    // define the global callback that will run when google maps is loaded
    window.resolveGoogleMapsPromise = function() {
      // resolve the google object
      resolve(window.google);
      // delete the global callback to tidy up since it is no longer needed
      delete window.resolveGoogleMapsPromise;
    }
    // Now, Load the Google Maps API
    const script = document.createElement("script");
    const API_KEY = 'AIzaSyBLnDm2Kz95aYZj7970Lgo1shaeXodi-y4';
    script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;
    script.async = true;
    document.body.appendChild(script);
  });
}

export function load_places() {
  let city = 'San Juan, Puerto Rico';
  let query = 'restaurant';
  const apiURL = 'https://api.foursquare.com/v2/venues/search?client_id=EZHTIOH3GZHL2D2XATRNUIBLR0353FO5UBCCK0INPFHOJEWQ&client_secret=N4DJAQEZRIZ1RV2ZFA0MLDIVSL2EZKUEJLV5WKZBSBG0E5A3&v=20181031&near=' +city + '&query=' + query;
  return fetch(apiURL).then(resp => resp.json())
}