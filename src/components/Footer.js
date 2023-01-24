export function Footer(){
    return (
        <div className="footer">
            <ul>
                <li>
                    <button className="footer__btn">
                        <a href="https://www.linkedin.com/feed/">
                            <i className="fab fa-linkedin home__btn"></i>
                        </a>
                    </button>
                </li>
                <li>
                    <button className="footer__btn">
                        <a href="https://www.google.com/">
                            <i className="fab fa-github home__btn"></i>
                        </a>
                    </button>
                </li>
                <li>
                    <button className="footer__btn">Mon cv</button>
                </li>
            </ul> 
            {/* <button className="footer__btn">Contactez-moi</button> */}
        </div>
    )
}