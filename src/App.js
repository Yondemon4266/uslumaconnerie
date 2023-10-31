import React from 'react';
import Accueil from './pages/Accueil';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Services from './pages/Services';
import Projets from './pages/Projets';
import Apropos from './pages/Apropos';

const App = () => {
  return (
    <div className='app'>
      <Navigation/>
      <Routes>
        <Route path='*' element={<Accueil/>}/>
        <Route path='/' element={<Accueil/>}/>
      </Routes>
      
    </div>
  );
};

export default App;