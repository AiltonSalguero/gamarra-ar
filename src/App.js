import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link, HashRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Gamarra Web App</Link>} scroll>
              <Navigation>
                <Link to="/">Inicio</Link>
                <Link to="/arlocation">AR</Link>
                <Link to="/maplocation">Mapa</Link>
              </Navigation>
            </Header>
            <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">MiCuenta</Link>}>
              <Navigation>
                <Link to="/">Inicio</Link>
                <Link to="/arlocation">AR</Link>
                <Link to="/maplocation">Mapa</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </HashRouter>
    );
  }
}

export default App;
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={function() { alert('click'); }}>
          Google Maps
      </button>
      <button onClick={function() { alert('click'); }}>
          Camara AR
      </button>
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
*/