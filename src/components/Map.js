// src/components/Map.js
import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'; // Import the Marker component

const Map = ({ apiKey, center, zoom, markers }) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            lat={marker.lat}
            lng={marker.lng}
            text={marker.text}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
