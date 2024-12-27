import MapComponent from './components/map/map';
import SideBar from './components/sideBar/SideBarComponent';
import './styles/App.css';
import AllRegisterAndAuth from './components/Auth/AllRegisterAndAuth';

function App() {
  return (
    <div className="App">
      {/* <AllRegisterAndAuth /> */}
      <SideBar />
      <MapComponent />
    </div>
  );
}

export default App;

// привет мир проверка н пуш в гит
