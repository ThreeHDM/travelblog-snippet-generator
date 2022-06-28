import "./App.css";
import React, { useState } from "react";

function App() {
  const [formState, setFormState] = useState({
    precio: "",
    duracion: "",
    info: "",
    traslados: "",
    salidas: "",
  });

  const handleChange = (event) => {
    setFormState((previousProps) => ({
      ...previousProps,
      [event.target.name]: event.target.value,
    }));
  };

  const textAreaValue = `<ul class="no-bullets">
    <li><i class="fa fa-usd" aria-hidden="true" style="margin-left: 4px;"></i> <b>Precio:</b> ${formState.precio}</li>
    <li><i class="fa fa-clock-o" aria-hidden="true"></i> <b>Duración:</b> ${formState.duracion}</li>
    <li><i class="fa fa-info-circle" aria-hidden="true"></i> <b>Info:</b> ${formState.info}</li>
    <li><i class="fas fa-bus"></i> <b>Traslados:</b>  ${formState.traslados}</li>
    <li><i class="fa fa-calendar" aria-hidden="true"></i> <b>Salidas:</b>  ${formState.salidas}</li>
</ul>`;

  return (
    <div>
      <header>
        <form className="box">
          <label>Precio </label>
          <input
            type="text"
            name="precio"
            value={formState.precio}
            onChange={handleChange}
          />
          <label>Duración </label>
          <input
            type="text"
            name="duracion"
            value={formState.duracion}
            onChange={handleChange}
          />
          <label>Info </label>
          <textarea
            name="info"
            value={formState.info}
            onChange={handleChange}
          />
          <label>Traslados </label>
          <input
            type="text"
            name="traslados"
            value={formState.traslados}
            onChange={handleChange}
          />
          <label>Salidas </label>
          <input
            type="text"
            name="salidas"
            value={formState.salidas}
            onChange={handleChange}
          />
        </form>

        <div className="box">
          <textarea
            defaultValue="aquí se genera el snippet"
            value={textAreaValue}
            rows="10"
            readonly
          />
        </div>
      </header>
    </div>
  );
}

export default App;
