import React from 'react';
import { Footer } from '../components/Footer';

import { Header } from '../components/Header';

const Contact = () => {

    return(

        <div className='contact'>
            <header className='contact__header'>
                <Header />
            </header>
            <main className='contact__content'>
                main
            </main>
            <footer className='footer'>
                <Footer />
            </footer>
            
        </div>

    )

}

export default Contact;