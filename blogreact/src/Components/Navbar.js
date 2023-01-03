import { useRef } from 'react';
import './Navbar.css';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
  return (
    <header>
        <h1>Projects</h1>
        <nav ref={navRef}>
            <a href='/#'>Home</a>
            <a href='/#'>Blog</a>
            <a href='/#'>My works</a>
            <a href='/#'>About</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                close
            </button>            
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          Menu
        </button>
    </header>
  )
}

export default Navbar