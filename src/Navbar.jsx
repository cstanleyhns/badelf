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
                    <div className='navBarBtn'><FaXTwitter /></div>
                  <div className='navBarBtn'><PiTelegramLogo /></div>
                 </div>
             
            </div>
        </> 
    )   
}