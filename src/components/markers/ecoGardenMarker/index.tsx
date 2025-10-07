import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./style.scss";
import { useMapStore } from "../../../stores/mapStore";
import { useGetGarden } from "../../../hooks/useGetGarden";

const createCircularImageIcon = (imageUrl: string, size: number = 40) => {
  return L.divIcon({
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        background-image: url('${imageUrl}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "></div>
    `,
    className: "circular-image-marker",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
};

export const EcoGardenMarker = ({
  position,
  imageUrl,
  title,
  gardenId,
}: {
  position: [number, number];
  imageUrl: string;
  title: string;
  gardenId: string;
}) => {
  const { showAside, setShowAside, setCurrentGarden } = useMapStore();
  const garden = useGetGarden(showAside ? gardenId : "");
  const icon = createCircularImageIcon(imageUrl);

  const handleSelectGarden = () => {
    if (!garden?.isLoading && garden?.data) {
      setCurrentGarden(garden.data);
    }
    setShowAside(true);
  };

  return (
    <Marker position={position} icon={icon}>
      <Popup>
        <div className="py-1">
          <img
            src={imageUrl}
            alt="popup image"
            className="col-12 w-100 img-fluid rounded my-2"
          />
          <strong className="font-primary col-12 fs-6">{title}</strong>
          <button
            className="btn btn-sm btn-outline-primary col-12 mt-2 rounded-pill"
            onClick={handleSelectGarden}
          >
            Ver mais
          </button>
        </div>
      </Popup>
    </Marker>
  );
};
