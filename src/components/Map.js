import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ latitude, longitude }) => {
  return (
    <MapPositioning>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        zoomControl={false}
        // scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>IP location</Popup>
        </Marker>
      </MapContainer>
    </MapPositioning>
  );
};

export default Map;

const MapPositioning = styled.div`
  position: relative;
  z-index: -1;
`;
