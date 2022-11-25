//import NavBar from "./Navbar";

import NavBar from "./Navbar";


export function Header(){
    return (
        <div className="header"> 

            <div className="header__title">
                <h1 className="header__name">Niv Rako</h1>
                <p>||</p>
                <span className="header__comment">Developpeur Front End</span>
            </div>
            <nav>
                <NavBar />
            </nav>
            
            
        </div>
       
    )
}