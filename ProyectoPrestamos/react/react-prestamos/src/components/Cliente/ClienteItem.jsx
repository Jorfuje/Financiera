import React from "react";

const ClienteItem=({cliente})=>{
    return (
        <div className="col-md-4">
            <div className="card card-body">
                <h3 className="card-title">Nombre: <strong>{cliente.name}</strong></h3>
                <p className="card-text">Apellidos: <strong>{cliente.apellidos}</strong></p>
                <p className="card-text">Fecha de Nacimiento: <strong>{cliente.fechaNacimiento}</strong></p>
                <p className="card-text">RFC: <strong>{cliente.rfc}</strong></p>
                <p className="card-text">Correo:: <strong>{cliente.correo}</strong></p>
                <p className="card-text">Telefono: <strong>{cliente.telefono}</strong></p>
            </div>
        </div>
    );
};

export default ClienteItem;