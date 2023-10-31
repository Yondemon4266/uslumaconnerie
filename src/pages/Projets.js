import React, { useState } from 'react';
import Project from '../components/Project';

const Projets = () => {
    const [moreProjectsVisible, setMoreProjectsVisible] = useState(false);
    return (
        <section className='projets' id='projets'>
            <div className="projets-chiffres">
                <div className="annee">
                    <h3>2001</h3>
                    <h4>Année de création</h4>
                </div>
                <div className="projets-nombre">
                    <h3>206</h3>
                    <h4>Projets</h4>
                </div>
            </div>
            <div className="titre-top">
                <h2>PROJETS</h2>
            </div>
            <div className="projets-content">
                {moreProjectsVisible && <button type="button" className='buttonless1' onClick={() => setMoreProjectsVisible(false)}>Voir moins</button>}
                <Project id={0}/>
                <Project id={1}/>
                <Project id={2}/>
                {moreProjectsVisible &&
                <>
                 <Project id={3}/>
                 <Project id={4}/>
                 <Project id={5}/>
                 <Project id={6}/>
                 <Project id={7}/>
                 {moreProjectsVisible && <button type="button" className='buttonless2' onClick={() => setMoreProjectsVisible(false)}>Voir moins</button>}
                </>
                 }
                {!moreProjectsVisible && <div className="voir-plus">
                    <button onClick={() => setMoreProjectsVisible(true)} type='button'>Voir plus</button>
                </div>}
            </div>
        </section>
    );
};

export default Projets;