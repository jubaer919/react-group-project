import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/UI/Navbar';
import Rockets from './Components/Rocket/Rockets';
import Missions from './Components/Mission/Missions';
import Profile from './Components/MyProfile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
