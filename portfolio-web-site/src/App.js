import Home from "./Pages/Home/Home";
import './css/style.css'
import {Routes, Route} from 'react-router-dom'
import 'animate.css';
import WOW from 'wow.js'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  );
}

export default App;
