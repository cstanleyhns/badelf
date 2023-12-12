import './Buttonlinks.css'
import { PiTelegramLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export function Buttonlinks() {

    return (
        <>
            <div className='buttonContainer'>
                <div className='buttonItem'>
                    <a href="https://x.com/BadElfFinance?t=wYZWU-QpGfM02YFoGrzU0A&s=09" target="_blank" rel="noopener noreferrer">
                        <div className='buttonBtn'><FaXTwitter /></div>
                    </a>
                </div>
                <div className='buttonItem'>
                    <a href="https://t.me/BadElfAVAX" target="_blank" rel="noopener noreferrer">
                        <div className='buttonBtn'><PiTelegramLogo /></div>
                    </a>
                </div>
            </div>

        </>
    )   
}