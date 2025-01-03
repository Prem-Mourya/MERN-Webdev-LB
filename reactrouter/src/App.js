import './App.css';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Labs from './components/Labs'
import Notfound from './components/Notfound'
import MainHeadder from './components/MainHeadder';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/support"}>Support</NavLink>
          </li>
          <li>
            <NavLink to={"/Labs"}>Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeadder />}>
          
        <Route index element={<Home/>}/> {/* This is default route */}
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<Notfound />} />
        
      </Route> 
      </Routes>
    </div>
  );
}

export default App;
