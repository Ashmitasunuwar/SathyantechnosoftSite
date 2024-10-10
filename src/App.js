import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Service from "./components/Service";
import logo from './logo/logo.jpg';
import './css/style.css'





function App() {

  const handleMouseOut = () => {

  }
  return (



    <div className>
      <div className=" navigate">
        <div >
          <img className='logo' src={logo} height={80} width={150} />
        </div>
        <div className="navigation ">
          <div className="divlink"><Link className="link" to="/"><strong >HOME</strong></Link>  </div>
          <div className="divlink" ><Link className="link" to="service" ><strong>SERVICE</strong></Link></div>
          <div className="divlink"><Link className="link" to="about"> <strong>ABOUT US </strong> </Link></div>
          <div className="divlink"> <Link className="link" to="contact"><strong>CONTACT</strong> </Link></div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


    </div>



  );
}

export default App;
