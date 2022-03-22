// import './App.css';
// import React, { useState } from 'react';
// import {BrowserRouter as Router, Routes, Route, useHistory} from 'react-router-dom';
// import Navbar from './Components/NavBar/NavBar';
// import Home from './Components/Home';
// import Services from './Components/Services';
// import Gallery from './Components/Gallery';
// import Contact from './Components/Contact';
// import Estimate from './Components/Estimate';
// import Bars from './Components/Bar/Bars';
// import Footer from './Components/Footer/Footer';


// function App() {

//   const [isOpen, setIsOpen] = useState(false)

//   const toggle = () => {
//       setIsOpen(!isOpen)
//   }

//   return (
//     <Router>
//       {/* <Home/> */}
//       <Bars isOpen={isOpen} toggle={toggle}
//         {...<Route path='*' exact element={<Home/>}/>}
//         {...<Route path='/services' exact element={<Services/>}/>}
//       />
//             <Navbar toggle={toggle} />
//       <Routes>
//         <Route path='*' exact element={<Home/>} />
//         <Route path='/services' exact element={<Services/>} />
//         <Route path='/gallery' exact element={<Gallery/>} />
//         <Route path='/contact' exact element={<Contact/>} />
//         <Route path='/estimate' exact element={<Estimate/>} />
//       </Routes> 
//       <Footer/>
//       <useHistory/>
//     </Router>
//   );
// }

// export default App;
//!imports

//?styled-components react-router-dom reactstrap react-grid-system pure-react-carousel react-icons react-scroll react-responsive-carousel react-alice-carousel


import './App.css';
import React, { useState } from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Home';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Estimate from './Components/Estimate';
import Bars from './Components/Bar/Bars';
import Footer from './Components/Footer/Footer';


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
      {/* <Home/> */}
      <Bars isOpen={isOpen} toggle={toggle}
        {...<Route path='*' exact element={<Home/>}/>}
        {...<Route path='#/services' exact element={<Services/>}/>}
      />
            <Navbar toggle={toggle} />
      <Routes>
        <Route path='*' exact element={<Home/>} />
        <Route path='/services' exact element={<Services/>} />
        <Route path='/gallery' exact element={<Gallery/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/estimate' exact element={<Estimate/>} />
      </Routes> 
      <Footer/>
      <useHistory/>
    </Router>
  );
}

export default App;