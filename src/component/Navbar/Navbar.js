import React, {useState} from "react";
import './Navbar.css'

const Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
        }
        else {
            setBurgerClass("burger-bar unclicked")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%', height: '10vh'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                <h1>Digital Locker</h1>
                <div className="right">
                <input type="text" className="input" placeholder="Search for document"/>
                <button>Submit</button>
                <button>language change</button>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar