import Bars from "./Bars";
import NavBar from "./Navbar";

function hello(){
    const headernav = document.querySelector(".header__nav")
    headernav.classList.toggle('responsive')
    console.log("header: ", headernav)
}


export function Header(){
    return (
        <div className="header"> 

            {/* <div className="header__title">
                <h1 className="header__name">Niv Rako</h1>
                <p>||</p>
                <span className="header__comment">Developpeur Front End</span>
            </div> */}
            <nav className="header__nav">
                <NavBar />
            </nav>
            <nav className="header__bars" onClick={hello}>
                <Bars />
            </nav>
        </div>
       
    )
}