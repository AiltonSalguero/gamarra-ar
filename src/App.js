import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link, BrowserRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/gamarra-ar">
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Gamarra Web App</Link>} scroll>
              <Navigation>
                <Link to="/">Inicio</Link>
                <Link path="https://kyssnar.github.io/location-ar0a8hz/">AR</Link>
                <Link to="/maplocation">Mapa</Link>
              </Navigation>
            </Header>
            
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;