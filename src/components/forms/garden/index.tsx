import { PrimaryButton } from "../../buttons/primary";
import "./style.scss";

export const GardenForm = () => {
  return (
    <section>
      <div>
        <h2 className="fs-1">Crie uma nova horta</h2>
        <p className="text-eco-mutated fs-5">
          Preencha o formulário abaixo para a criação de sua horta
        </p>
      </div>
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            <label htmlFor="" className="form-label">
              Nome da horta
            </label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="" className="form-label">
              CEP
            </label>
            <input type="text" className="form-control" />
            <button className="btn btn-link p-0">Buscar CEP</button>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4">
            <label htmlFor="" className="form-label">
              Nome da horta
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12 col-md-4">
            <label htmlFor="" className="form-label">
              Número
            </label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-12 col-md-4">
            <label htmlFor="" className="form-label">
              Tamanho m<sup>2</sup>
            </label>
            <input type="number" className="form-control" />
          </div>
        </div>

        <div className="col-12 mt-4">
          <div>
            <h3 className="fs-3">Foto</h3>
            <p className="text-eco-mutated">Envie uma foto da horta</p>
            <label htmlFor="">
              <input type="file" />
            </label>
          </div>
        </div>

        <div className="d-flex gap-3 mt-4">
          <PrimaryButton text="Enviar" type="submit" />
          <button className="btn btn-secondary rounded-pill py-2 col-4 ">
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};
