const handleLocationChange = async ({
  storeLocation,
  getGeocode,
  setFieldValue,
  setSearchValue,
}) => {
  // Destructure latitude and longitude
  let { lat, lng } = storeLocation;

  // Run reverse geocoding to get array of addresses from coordinates
  let geoCodeResults = await getGeocode({
    location: new window.google.maps.LatLng(lat, lng),
  });

  // Get formatted address
  let address = geoCodeResults[0].formatted_address;

  // Set selected value to formik search input field
  await setFieldValue("storeLocationAddress", address);

  // Set selected value to usePlacesAutocomplete search value
  await setSearchValue(address);
};

export default handleLocationChange;
