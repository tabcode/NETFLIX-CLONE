import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/components/Nav.css';
function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const trasitionNavBar = () => {
        if (window.scrollY > 100) handleShow(true);
        else handleShow(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', trasitionNavBar);
        return () => window.removeEventListener('scroll', trasitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className="nav__logo" alt="Logo Netflix"
                    onClick={() => history.push('/')} />
                <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" className="nav__avatar" alt="Logo Profile"
                    onClick={() => history.push('/profile')} />
            </div>
        </div>
    )
}

export default Nav;