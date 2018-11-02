











let locationList = [];


export function load_places() {
  let locations = [
    '4ce5863b2b4e721e503c352b',
    '4c2a32758abca593814afe1f',
    '4f8a0e04e4b0af4d4e84422f',
    '4b412951f964a52062c225e3',
    '579547da498eeafb276a5380',
    '52507f9f11d27af62748e915',
    '52dc7c3f498e66c02029676d',
    '4b4705a2f964a5209a2a26e3',
    '4b59b8e9f964a5209b9428e3',
    '4d24944e14f2b1f740956fbe',
    '4bc1e88a920eb7137b451b2c',
  ];

  const Client_id = "EZHTIOH3GZHL2D2XATRNUIBLR0353FO5UBCCK0INPFHOJEWQ";
  const Client_Secret = "N4DJAQEZRIZ1RV2ZFA0MLDIVSL2EZKUEJLV5WKZBSBG0E5A3";


  for (i = 0; i < locations.length; i++)
    api = `https://api.foursquare.com/v2/venues/search?client_id=${Client_id}&client_secret=${Client_Secret}&v=20181031` + i
    fetch(apiURL).then(resp => resp.json())
}
