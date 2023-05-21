import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('name', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('name')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('name: '+cookies.get('name'));
        return (
            <div>
                Menu Principal
                <p className="card-text">Nombre cliente: <strong>{cookies.get('name')}</strong></p>

                <br />
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
        );
    }
}

export default Menu;