import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/a.css';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link, BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.png';
class Home extends Component {
    render() {
        // TODO traer las funciones de carga de datos aqui para que no cargue doble o triple xd ycarge una sola vez
        return (

            <BrowserRouter basename="/gamarra-ar">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img src={logo} class="img-fluid" />
                        </div>
                    </div>
                    <div class="row" className="mb-2">
                        <div class="col text-center">
                            <Button className="btn btn-primary btn-lg btn-block" href="https://kyssnar.github.io/location-ar0a8hz/">AR</Button>
                        </div>
                    </div>
                    <div class="row" className="mb-2">
                        <div class="col text-center">
                            <Link className="btn btn-primary btn-lg btn-block" to="/maplocation">Mapa</Link>
                        </div>
                    </div>
                </div>

            </BrowserRouter>


        )
    }
}

export default Home;