import React from 'react';
import Header from '../components/Header';
import Services from './Services';
import Apropos from './Apropos';
import Projets from './Projets';
import Contact from '../components/Contact';

const Accueil = () => {
    return (
        <section className='accueil' id="accueil">
            <Header/>
            <Services/>
            <Apropos/>
            <Projets/>
            <Contact/>

        </section>
    );
};

export default Accueil;