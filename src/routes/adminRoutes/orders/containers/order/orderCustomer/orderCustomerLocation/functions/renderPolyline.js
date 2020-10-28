// Render polyline
const renderPolyline = (map, maps, storeLocation, deliveryLocation) => {
  // Polyline path coordinates (origin & destination)
  let path = [storeLocation, deliveryLocation];

  // Define polyline
  const deliveryPath = new maps.Polyline({
    path,
    geodesic: false,
    strokeColor: "#356ee1",
    strokeOpacity: 1.0,
    strokeWeight: 2.25,
  });

  // Set polyline to map
  deliveryPath.setMap(map);
};

export default renderPolyline;
