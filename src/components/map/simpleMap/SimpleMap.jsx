import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState, useCallback } from "react";

const mapStyle = {
  width: "100%",
  height: "100%",
};
const location = {
  lat: 31.5204,
  lng: 74.3587,
};
function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDTVNLbPHJFW13XDe31-oaMsrhRNxhhH7g",
    id: "google-map-script",
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(location);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyle}
      center={location}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(SimpleMap);
