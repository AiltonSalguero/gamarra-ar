import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/a.css';
import { Link, HashRouter } from 'react-router-dom'
class Home extends Component {
    render() {

        return (
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">

                </nav>
                <div class="container">
                    <div class="card border-0 shadow my-5">
                        <div class="card-body p-5">
                            <h1 class="font-weight-light">Encuentra tiendas cercanas en Gamarra</h1>
                            <p class="lead"></p>
                            <p class="lead"></p>
                            <div style={{ "height": "300" }}></div>
                            <p class="lead mb-0">Selecciona una opcion</p>
                            <Link to="/">Inicio</Link>
                            <p class="lead mb-0">  </p>
                            <Link to="/arlocation">AR</Link>
                            <p class="lead mb-0">  </p>
                            <Link to="/maplocation">Mapa</Link>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default Home;