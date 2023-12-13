import React from 'react'
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import { Route, Routes } from 'react-router-dom';
import Skills from './routes/Skills';

function App() {
  return (
    <>

     <Routes>
      {/* localhost:3000 - Home page */}
      <Route path='/' element={<Home/>}/>

     {/* localhost:3000/project - Project page */}
      <Route path='/project' element={<Project/>}/>

      {/* localhost:3000/about - About page */}
      <Route path='/about' element={<About/>}/>
      
      {/* localhost:3000/contact - Contact page */}
      <Route path='/contact' element={<Contact/>}/>
     
     {/* localhost:3000/skills - Contact page */}
     <Route path='/skills' element={<Skills/>}/>

     </Routes>
      
      
    </>
  );
}


export default App;
