import { MapCard } from "../../cards/mapCard";
import { LuAlarmClock } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { useMapStore } from "../../../stores/mapStore";
import { useEffect } from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { AccordionMap } from "../../accordions/accordionMap";

const formatDate = (date: string | Date) =>
  new Date(date).toLocaleDateString("pt-BR");

const AsideHeader = () => {
  const { setShowAside, currentGarden } = useMapStore();

  useEffect(() => {
    console.log(currentGarden);
  }, [currentGarden]);

  if (!currentGarden) return null;

  const { garden, location } = currentGarden;

  return (
    <>
      <div className="position-absolute top-2 end-0 bg-light rounded">
        <IoIosClose
          onClick={() => setShowAside(false)}
          size={32}
          role="button"
        />
      </div>
      <div className="aside-map-image-container">
        <img src={garden.imgUrl} alt="Imagem da Horta" />
      </div>
      <div className="p-2">
        <p className="font-primary fs-5 fw-bold m-0 text-capitalize">
          {garden.name}
        </p>
        <p className="text-muted">
          {location.city}, {location.state}
        </p>
        <p className="fs-6">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://maps.google.com/?q=${encodeURIComponent(
              `${currentGarden.garden.lat}, ${currentGarden.garden.lng}`
            )}`}
            className="btn btn-success btn-small w-100 rounded-pill px-4 d-flex align-items-center justify-content-center gap-2 fw-medium"
          >
            <FaDirections />
            Ir para
          </a>
        </p>
      </div>
    </>
  );
};

const HortaInfo = () => {
  const { currentGarden } = useMapStore();

  if (!currentGarden) return null;

  const { owner, tamanhoM2, createdAt } = currentGarden.garden;

  return (
    <ul className="list-group">
      <li className="list-group-item">
        Tamanho: {tamanhoM2}m<sup>2</sup>
      </li>
      <li className="list-group-item">Criada em: {formatDate(createdAt)}</li>
      <li className="list-group-item">Responsável: {owner.name}</li>
      <li className="list-group-item">Email: {owner.email}</li>
    </ul>
  );
};

const Sensores = () => {
  return (
    <>
      <MapCard.Sensor
        header="Umidade"
        title="70%"
        text="min: 20% - max: 80%"
        progress={70}
        progressStyle="info"
      />
      <MapCard.Sensor
        header="Temperatura"
        title="28°C"
        text="min: 2°C - max: 40°C"
        progress={60}
        progressStyle="warning"
      />
      <MapCard.Sensor
        header="Nível d'água"
        title="50%"
        text="Aproximadamente 500ml"
        progress={50}
        progressStyle="primary"
      />
    </>
  );
};

const Historico = () => {
  const { currentGarden } = useMapStore();

  const history = currentGarden?.garden.irrigationHistory.irrigations || [];

  if (!history) return;

  const sortedHistory = [...history].sort(
    (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
  );

  return (
    <ul className="list-group">
      {sortedHistory.length > 0 ? (
        sortedHistory.map((item, index) => (
          <li
            key={item.id || index}
            className="list-group-item d-flex align-items-center gap-2"
          >
            <LuAlarmClock />
            {formatDate(item.timestamp)}
            <MdOutlineWaterDrop />
            {item.volume + "ml"}
          </li>
        ))
      ) : (
        <li className="list-group-item">
          Nenhum histórico de irrigação encontrado.
        </li>
      )}
    </ul>
  );
};

const Plantas = () => {
  const { currentGarden } = useMapStore();

  const plants = currentGarden?.garden.plants || [];

  if (!plants) return;

  return (
    <>
      {plants.length > 0 ? (
        plants.map((plantGardenItem) => (
          <MapCard.Plant
            key={plantGardenItem.plant.id}
            name={plantGardenItem.plant.nomeComum}
            nameCi={plantGardenItem.plant.nomeCientifico}
            quant={plantGardenItem.quant}
          />
        ))
      ) : (
        <p className="p-2 m-0">Nenhuma planta cadastrada nesta horta.</p>
      )}
    </>
  );
};

export const AsideGardenContent = () => {
  return (
    <section className="aside-map-content">
      <AsideHeader />

      <div className="accordion" id="aside-map-accordion">
        <AccordionMap id="one" title="Informações da Horta" defaultOpen>
          <HortaInfo />
        </AccordionMap>

        <AccordionMap id="two" title="Sensores">
          <Sensores />
        </AccordionMap>

        <AccordionMap id="three" title="Histórico Irrigação">
          <Historico />
        </AccordionMap>
        <AccordionMap id="four" title="Plantas">
          <Plantas />
        </AccordionMap>
      </div>
    </section>
  );
};
