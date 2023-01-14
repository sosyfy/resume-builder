import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './pages/homepage/Home';
import {BrowserRouter , Routes ,Route } from "react-router-dom"
import Editor from './pages/editor/Editor';
import Templates from './pages/templates/Templates';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
     <div>
     <Routes> 
       <Route path="/" element={<Home />} />
       <Route path="/templates" element={<Templates />} />
       <Route path="/:id/edit" element={<Editor />} />
       <Route path="*" element={<Home />} />
     </Routes>
     <Footer />
     </div>
    </BrowserRouter>
  );
}

export default App;
