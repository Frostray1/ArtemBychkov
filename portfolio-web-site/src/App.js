import Home from "./Pages/Home/Home";
import './css/style.css'
import {Routes, Route} from 'react-router-dom'
import 'animate.css';
import WOW from 'wow.js'
import MiniProjects from "./Pages/MiniProjects/MiniProjects";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mini-projects' element={<MiniProjects/>}/>
    </Routes>
  );
}

export default App;
