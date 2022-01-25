import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapPositioning = styled.div`
  position: relative;
  z-index: -1;
`;

const Map = () => {
  return (
    <MapPositioning>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        zoomControl={false}
        // scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Popup</Popup>
        </Marker>
      </MapContainer>
    </MapPositioning>
  );
};

export default Map;
