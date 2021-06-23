import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/a.css';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link, BrowserRouter } from 'react-router-dom'
class Home extends Component {
    render() {
        // TODO traer las funciones de carga de datos aqui para que no cargue doble o triple xd ycarge una sola vez
        return (
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
                </nav>
                <div class="container">
                    
                    <Card shadow={5} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{height: '200px', width:'500px', background: 'url(logo.png)'}} ></CardTitle>
                        <CardText>
                            Encuentra tiendas cercanas en Gamarra
                        </CardText>
                        <CardActions style={{margin: '0 auto', margin: 'auto'}}>
                            
                        </CardActions>
                        
                    </Card>
                    <Button raised colored>Button</Button>
                </div>
            </body>
        )
    }
}

export default Home;