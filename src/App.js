import './App.css';
import {Routes, Route} from "react-router-dom"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "/node_modules/bootstrap/dist/js/bootstrap.bundle"

import Home from './Componants/Home';
import Navbar from './Componants/Navbar';
import About from './Componants/About';
import Courses from './Componants/Courses';
import Contact from './Componants/Contact';
import Footer from './Componants/Footer';



function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/Courses' element={<Courses/>} />
          <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
