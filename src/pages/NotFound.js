import React from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


const NotFound = () => {

    return(
        <div className='notfound'>
            <header className='notfound__header'>
               <Header />
            </header>
            <div className='notfound__content'>Cette page n'existe pas</div>
            <footer className='notfound__footer'>
                    <Footer />
            </footer>
        </div>
    )

}

export default NotFound;