import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";
import "./Form.css"

const Formulary = ({ dataForm }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      Swal.fire({
        title: "Ingrese sus datos por favor",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
    } else {
      dataForm(name, address, phone, email);
    }
  };

  return (
    <div className="form__container">
    <form id="form__container2">
      <div className="myForm1">
        <label className="form-label">Nombre y Apellido</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          pattern="[A-Za-z]"
          className="form-input"
          placeholder="Nombre"
          required
        />

        <label className="form-label">Dirección</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          className="form-input"
          placeholder="Dirección"
          required
        />

        <label className="form-label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-input"
          placeholder="Email"
          required
        />

        <label className="form-label">Telefono</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          className="form-input"
          placeholder="Teléfono"
          required
        />

        <button className="submit" onClick={submit}>
          Enviar
        </button>
      </div>
    </form>
    </div>
  );
};

export default Formulary;
