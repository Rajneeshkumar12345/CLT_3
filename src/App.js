
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Reaserch from './components/Reaserch';
import Products from './components/Products';
// import Ckeck from './components/Ckeck';
// import Typewriter from './components/Typewriter';

import About from './components/About';
import Service from './components/Service';
import Explore from './components/Explore';
import Android from './components/Android';
import Ui from './components/Ui';
import Outsourcing from './components/Outsourcing';
import Artificial from './components/Artificial';
// import useDocumentTitle from './components/useDocumentTitle'



// function Page(props){
//   return <h2>{props.content}</h2>
// }

//  Home = () => {
//   useDocumentTitle('Home')
//   return <Page content='This is Home!' />
// }

// function About() {
//   useDocumentTitle('About title')
//   return <Page content='About!' />
// }


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <ScrollToTop>
     <Navbar/>
     {/* <Home/> */}

     {/* Typewriter start here */}

     {/* Typewriter start end here */}
  
     
     {/* <Ckeck/> */}
        <Routes>
        <Route exact path="/" element={<Home/>}></Route> 
         <Route exact path="/About" element={<About/>}></Route>      
          <Route exact path="/Technology" element={<Technology/>}></Route>
          <Route exact path="/Service" element={<Service/>}></Route>
          <Route exact path="/Projects" element={<Projects/>}></Route>
          <Route exact path="/Reaserch" element={<Reaserch/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
          <Route exact path="/Products" element={<Products/>}></Route>
          <Route exact path="/Explore" element={<Explore/>}></Route>
          <Route exact path="/Android" element={<Android/>}></Route>
          <Route exact path="/Ui" element={<Ui/>}></Route>
          <Route exact path="/Outsourcing" element={<Outsourcing/>}></Route>
          <Route exact path="/Artificial" element={<Artificial/>}></Route>
          <Route exact path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
        <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
