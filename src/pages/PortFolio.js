import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const PortFolio = () => {

    return(

        <div className='portFolio'>
            <header className='portFolio__header'>
                <Header />
            </header>
            <main className='portFolio__content'>
                Mon PortGFolio
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )

}

export default PortFolio;