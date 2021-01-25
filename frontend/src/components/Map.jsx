import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


const SimpleMap = (props) => {
    const [center, setCenter] = useState({lat: parseFloat(props.latitude), lng: parseFloat(props.longitude) });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCgFiiYBZKhw4zJlWmOf0fblG0Kz-JbGNI' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={parseFloat(props.latitude)}
            lng={parseFloat(props.longitude)}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;