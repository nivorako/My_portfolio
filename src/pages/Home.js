import React from 'react';
import { Footer } from '../components/Footer';
import NavBar from '../components/Navbar';
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
                   
                </section>
                <section className='home__id'>
                    
                </section>
                <div className='home__navbar hidden'><NavBar/></div>
            </main>
            <footer className='home__footer'>
                    <Footer />
            </footer>
        </div>
    )
}

export default Home;

{/* <div className='home__idImg'>
        <div className='home__idLogo'></div>
        <img alt='je suis devant écran' src="/media/za.png"/>
    </div>
    <div className="home__idTitle">
        <h1 className="home__idName">Niv Rako</h1>
        <p>||</p>
        <span className="home__idComment">Developpeur Front End</span>
    </div> */}