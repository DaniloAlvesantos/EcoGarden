import { MapContainer, TileLayer } from "react-leaflet";
import { useCurrentPosition } from "../../../hooks/useCurrentPosition";
import "leaflet/dist/leaflet.css";
import "./map.scss";
import { memo } from "react";
import { EcoGardenMarker } from "../../markers/ecoGardenMarker";
import { UserMarker } from "../../markers/userMarker";
import { useGetGardens } from "../../../hooks/useGetGardens";

function EcoGardenMapComp() {
  let { position } = useCurrentPosition();
  const gardens = useGetGardens();
  console.log({ gardens });

  if (!position) {
    position = { lat: -22.436, lng: -46.821 };
  }

  if (!gardens) {
    return;
  }

  return (
    <MapContainer
      center={[position.lat, position.lng]}
      zoom={16}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {gardens.data.map((garden) => {
        return (
          <EcoGardenMarker
            position={[garden.garden.lat, garden.garden.lng]}
            imageUrl={garden.garden.imgUrl}
            title={garden.garden.name}
            gardenId={garden.garden.id}
            key={garden.garden.id}
          />
        );
      })}

      <UserMarker position={[position.lat, position.lng]} key={"user-marker"} />
    </MapContainer>
  );
}

export const EcoGardenMap = memo(EcoGardenMapComp);
