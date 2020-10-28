import { getGeocode } from "use-places-autocomplete";

// Get address
const getAddress = async (maps, deliveryLocation) => {
  // Destructure latitude and longitude
  let { lat, lng } = deliveryLocation;

  // Run reverse geocoding to get array of addresses from coordinates (Returns promise)
  let geoCodeResults = await getGeocode({
    location: new maps.LatLng(lat, lng),
  });

  // Return formatted address
  return geoCodeResults[0].formatted_address;
};

export default getAddress;
