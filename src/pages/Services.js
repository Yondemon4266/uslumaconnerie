import React from 'react';

const Services = () => {
    return (
        <section className='services' id="services">
            <div className="titre-top">
                    <h2>SERVICES</h2>
            </div>
            <div className="services-content">
                <div className="service">
                    <img src="./img/photos/devis.webp" alt="devis des travaux"/>
                    <div className="service-content">
                        <h3>Devis des travaux</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora molestiae dignissimos, praesentium numquam cupiditate iure magni atque libero aut neque maxime quisquam cum laboriosam a dolore saepe, mollitia consequatur! Possimus.</p>
                    </div>
                </div>
                <div className="service">
                    <img src="./img/photos/IMG-20230919-WA0010.jpg" alt="construction-pierre" className='pierre1'/>
                    <div className="service-content">
                        <h3>Constructions en pierre</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus laboriosam ex culpa molestiae quod, veritatis a nisi perspiciatis, minus modi ipsum dolores esse illum explicabo corporis voluptatibus incidunt doloribus?</p>
                    </div>
                </div>
                <div className="service">
                    <img src="./img/photos/IMG-20230919-WA0008.jpg" alt="construction-beton" className='beton1'/>
                    <div className="service-content">
                        <h3>Constructions en béton</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus laboriosam ex culpa molestiae quod, veritatis a nisi perspiciatis, minus modi ipsum dolores esse illum explicabo corporis voluptatibus incidunt doloribus?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;