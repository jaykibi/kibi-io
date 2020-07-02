import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/css/bootstrap.min.css';
import './assets/css/stylish-portfolio.min.css';
import LandingPage from './components/LandingPage';
import AboutSection from './components/AboutSection';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Map from './components/Map';
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
    <AboutSection />
    <TechStack />
    <Projects />
    <Contact />
    <Map />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
