import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
const mapStyles = {
  height: "50vh",
  width: "100%",
};
const MapContainer = ({ currentPosition, setCurrentPosition }) => {
  const [selected, setSelected] = useState({});
  //   console.log("selected", currentPosition);
  const [locName, setLocName] = useState("");
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDTVNLbPHJFW13XDe31-oaMsrhRNxhhH7g",
  });

  const onSelect = (item) => {
    setSelected(item);
  };
  const getLocationName = (currentPosition) => {
    if (Object.keys(currentPosition).length > 0) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { location: currentPosition },
        function (results, status) {
          if (status === window.google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              setLocName(results[0].formatted_address);
            }
          }
        }
      );
    }
  };
  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: currentPosition }, function (results, status) {
      if (status === window.google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          setLocName(results[0].formatted_address);
        }
      }
    });
    setCurrentPosition(currentPosition);
  };
  const markerClicker = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: currentPosition }, function (results, status) {
      if (status === window.google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          setLocName(results[0].formatted_address);
        }
      }
    });
    onSelect(currentPosition);
  };

  useEffect(() => {
    if (isLoaded) {
      navigator?.geolocation.getCurrentPosition(success);
    }
  }, [isLoaded]);

  function RenderMap() {
    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(currentPosition);
      map.fitBounds(bounds);
      setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
      setMap(null);
    }, []);

    return isLoaded && Object.keys(currentPosition).length > 0 ? (
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={currentPosition}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(e) => {
          setCurrentPosition({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          });
          getLocationName({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          });
        }}
      >
        <Marker position={currentPosition} onClick={markerClicker} />
        {selected.lat && (
          <InfoWindow
            position={selected}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{locName}</p>
          </InfoWindow>
        )}
        <></>
      </GoogleMap>
    ) : (
      <>Loading.......</>
    );
  }

  React.memo(RenderMap);

  return (
    <>
      <div className="child_main_content_div">
        <div className="child_content_div">
          <div>
            <RenderMap />
          </div>
        </div>
      </div>
    </>
  );
};
export default MapContainer;
