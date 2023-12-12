import './Navbar.css'
import elfStanding from './assets/elf-standing.png'
import { PiTelegramLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export function Navbar() {

    return (
        <>
            <div className='navbarContainer'>
                <div><img src={elfStanding} className="navBarImg" alt="Vite logo" /></div>
                <div className="push">
                    <div>$BADELF</div>
                    <a href="https://x.com/BadElfFinance?t=wYZWU-QpGfM02YFoGrzU0A&s=09" target="_blank" rel="noopener noreferrer">
                        <div className='navBarBtn'><FaXTwitter /></div>
                    </a>
                    <a href="https://t.me/BadElfERC20" target="_blank" rel="noopener noreferrer">
                        <div className='navBarBtn'><PiTelegramLogo /></div>
                    </a>
                </div>
             
            </div>
        </> 
    )   
}