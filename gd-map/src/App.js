import React from 'react';
import MapComponent from './components/map/map';
import './styles/App.css';
import SideBar from './components/sideBar/SideBarComponent';

function App() {

  return (
    <div className="App">
      <SideBar />
      <MapComponent />
    </div>
  );
}

export default App;
