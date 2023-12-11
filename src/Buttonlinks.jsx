import './Buttonlinks.css'
import { PiTelegramLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export function Buttonlinks() {

    return (
        <>
            <div className='buttonContainer'>
                <div className='buttonItem'>
                    <button className='button'><FaXTwitter />
                    </button>
                </div>
                <div className='buttonItem'>
                    <button className='button'><PiTelegramLogo />
                    </button>
                </div>
                </div>

        </>
    )   
}