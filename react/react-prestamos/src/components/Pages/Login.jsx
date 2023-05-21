import React, { Component } from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ClienteServer from "../Cliente/ClienteServer";
import swal from "sweetalert";
class Login extends Component {
  state = {
    form: {
      correo: '',
      password: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  iniciarSesion = async () => {
    const res = await ClienteServer.getClienteByCorreo(this.state.form.correo);
    const data = await res.json();
    console.log(data);
    if (data.message === "Seccess" ) {
      if (data.clientes.password === this.state.form.password){
        console.log(data.clientes.password);
        window.location.href = "./clienteList"
      }
      else{
        swal("Error", "Contraseña invalida");
      }
    }
    else {
      swal("Error", "Correo invalido");
    }

  }

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="correo"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;