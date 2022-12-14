import React from 'react';
import { Footer } from '../components/Footer';

import { Header } from '../components/Header';

console.log()
const Home = () => {

    return(
        <div className='home'>
            <header className='home__header'>
               <Header />
            </header>
            <main className='home__content'>
                <section className='home__msg'>
                    <h2 className='home__title'>Hello World !!</h2><div></div>
                    <div>
                        <p className=''>Bienvenu(e) sur mon portFolio</p>
                        <p className=''>Developpeur Front End en reconversion, passionné par la puissance du web</p>
                    </div>
                   
                    <div className='home__social'>  
                        <ul>
                            <li>
                                <button>
                                    <a href="https://www.linkedin.com/feed/">
                                        <i className="fab fa-linkedin home__btn"></i>
                                    </a>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <a href="https://www.google.com/">
                                        <i className="fab fa-github home__btn"></i>
                                    </a>
                                </button>
                            </li>
                            <li>
                                <button className='home__btn'>Mon cv</button>
                            </li>
                        </ul> 
                    </div>
                </section>
                <section className='home__img'>
                    <img alt='je suis devant écran' src="/media/za.png"/>
                </section>
            </main>
            <footer className='home__footer'>
                    <Footer />
            </footer>
        </div>
    )
}

export default Home;