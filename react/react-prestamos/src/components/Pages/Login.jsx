import React, { Component } from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as EmpleadoServer from "../Empleado/EmpleadoServer"
import * as ClienteServer from "../Cliente/ClienteServer";
import swal from "sweetalert";
import Cookies from 'universal-cookie';

const cookies = new Cookies();


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
    const res = await EmpleadoServer.getEmpleadoByCorreo(this.state.form.correo);
    const data = await res.json();
    console.log(data);
    if (data.message === "Seccess") {
      if (data.empleados.password === this.state.form.password) {
        console.log(data.empleados.password);
        //var respuesta = data[0];
        cookies.set('id', data.empleados.id, { path: "/" })
        cookies.set('name', data.empleados.name, { path: "/" })
        swal('Bienvenido', data.empleados.name)
        window.location.href = "./menu"
      }
      else {
        swal("Error", "Contraseña invalida");
      }
    }
    else {
      const res = await ClienteServer.getClienteByCorreo(this.state.form.correo);
      const data = await res.json();
      console.log(data);
      if (data.message === "Seccess") {
        if (data.clientes.password === this.state.form.password) {
          console.log(data.clientes.password);
          cookies.set('id', data.clientes.id, { path: "/" })
          cookies.set('name', data.clientes.name, { path: "/" })
          swal('Bienvenido', data.clientes.name)
          window.location.href = "./menu"
        }
        else {
          swal("Error", "Contraseña invalida");
        }
      }
      else {
        swal("Error", "Correo invalido");
      }

    }

  }

  componentDidMount() {
    if (cookies.get('name')) {
      window.location.href = "./menu";
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