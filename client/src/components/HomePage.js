import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
      <div className='app-container__container'>
         <div className='home'>
           <h1 className='home__gtitre'>Bienvenue dans l'application Ecommerce</h1>
           <h2 className='home__ptitre'>La plus grande source de placages</h2>
           <div className='home__linkbox'>
             <Link to="/products" className='home__btn home__btn--blue home__btn--animated'>Entrer</Link>
           </div>
         </div>
       </div>  
);

export default HomePage;
