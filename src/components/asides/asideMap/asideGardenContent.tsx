import { MapCard } from "../../cards/mapCard";
import { LuAlarmClock } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { useMapStore } from "../../../stores/mapStore";
import { useEffect } from "react";

interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem = ({
  id,
  title,
  children,
  defaultOpen,
}: AccordionItemProps) => (
  <div className="accordion-item">
    <h2 className="accordion-header" id={`heading-${id}`}>
      <button
        className={`accordion-button ${defaultOpen ? "" : "collapsed"}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse-${id}`}
        aria-expanded={defaultOpen ? "true" : "false"}
        aria-controls={`collapse-${id}`}
      >
        {title}
      </button>
    </h2>
    <div
      id={`collapse-${id}`}
      className={`accordion-collapse collapse ${defaultOpen ? "show" : ""}`}
      aria-labelledby={`heading-${id}`}
      data-bs-parent="#aside-map-accordion"
    >
      <div className="accordion-body">{children}</div>
    </div>
  </div>
);

const AsideHeader = () => {
  const { setShowAside, currentGarden } = useMapStore();

  useEffect(() => {
    console.log(currentGarden);
  }, [currentGarden]);

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
        <img
          src="https://123ecos.com.br/wp-content/uploads/2024/06/Horta-comunitaria.jpg"
          alt="Imagem da Horta"
        />
      </div>
      <div className="p-2">
        <p className="font-primary fs-5 fw-bold m-0">Horta 01</p>
        <p className="text-muted">Itapira, SP</p>
      </div>
    </>
  );
};

const HortaInfo = () => (
  <ul className="list-group">
    <li className="list-group-item">
      Tamanho: 5 m<sup>2</sup>
    </li>
    <li className="list-group-item">Criada em: 20/08/2025</li>
    <li className="list-group-item">Responsável: John Doe</li>
    <li className="list-group-item">Email: johndoe@gmail.com</li>
  </ul>
);

const Sensores = () => (
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

const Historico = () => (
  <ul className="list-group">
    <li className="list-group-item d-flex align-items-center gap-2">
      <LuAlarmClock /> 15:00 - 25/09/2025
    </li>
    <li className="list-group-item d-flex align-items-center gap-2">
      <LuAlarmClock /> 08:00 - 25/09/2025
    </li>
    <li className="list-group-item d-flex align-items-center gap-2">
      <LuAlarmClock /> 18:00 - 24/09/2025
    </li>
  </ul>
);

const Plantas = () => {
  return <MapCard.Plant name="Beterraba" nameCi="Beterraba" quant={5} />;
};

export const AsideGardenContent = () => {
  return (
    <section className="aside-map-content">
      <AsideHeader />

      <div className="accordion" id="aside-map-accordion">
        <AccordionItem id="one" title="Informações da Horta" defaultOpen>
          <HortaInfo />
        </AccordionItem>

        <AccordionItem id="two" title="Sensores">
          <Sensores />
        </AccordionItem>

        <AccordionItem id="three" title="Histórico Irrigação">
          <Historico />
        </AccordionItem>
        <AccordionItem id="four" title="Plantas">
          <Plantas />
        </AccordionItem>
      </div>
    </section>
  );
};
