import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  return (
    <MapContainer
      center={[35.6892, 51.389]}
      zoom={13}
      style={{ height: "100%", width: "100%"  }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[35.6892, 51.389]}>
        <Popup>تهران، ایران 🌍</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
