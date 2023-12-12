import './Navbar.css'
import head from './assets/head.png'
import { PiTelegramLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export function Navbar() {

    return (
        <>
            <div className='navbarContainer'>
                <div><img src={head} className="navBarImg" alt="elf head" /></div>
                <div className="push">
                    <a  href="/" className='navBarLink'>
                      <div className='navBarLink'>$BADELF</div>
                    </a>
                    
                    <a href="https://x.com/BadElfFinance?t=wYZWU-QpGfM02YFoGrzU0A&s=09" target="_blank" rel="noopener noreferrer">
                        <div className='navBarBtn'><FaXTwitter /></div>
                    </a>
                    <a href="https://t.me/BadElfAVAX" target="_blank" rel="noopener noreferrer">
                        <div className='navBarBtn'><PiTelegramLogo /></div>
                    </a>
                </div>
            </div>
        </> 
    )   
}