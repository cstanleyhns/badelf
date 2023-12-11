import './Features.css'
import feat1 from './assets/feat-1.png'
import feat2 from './assets/feat-2.png'
import feat3 from './assets/feat-3.png'
import feat4 from './assets/feat-4.png'

export function Features() {

    return (
        <>
            <div className='featuresContainer'>
             
                    <div className='featItemLeft'>
                        <div className='featMainTitle'>
                            Stealth Launched on the <span className='highlight'>ERC20 Network</span>
                        </div>
                        <p>Bad Elf is a community driven charity project built by experienced developers based in the UK and USA dedicated to bringing joy and warmth to underprivileged children, or children impacting by war during the festive season.</p>
                        <p>A charity wallet containing 5% of the <a className="featLink" href="/">$BADELF</a> supply will be dedicated to a charity of the communities choice.</p>
                        <p>Launching on the ERC20 <a className="featLink" href="/">$BADELF</a> will have its LP locked and contract renounced to ensure security. Anti sniper bot measures will be in place. No team wallets.</p>
                        <p>Please join us on this effort to help spread a little joy on children’s faces this  Christmas!</p>
                    </div>
                    <div className='featItemsGroup'>
                        <div className='featItems'>
                            <div className='featItem'>
                                <img className='featImg' src={feat1} alt='placeholder' />
                                <div>Liquidity locked</div>
                                <div>LOCKED LIQUIDITY</div>
                            </div>
                            <div className='featItem'>
                                <img className='featImg' src={feat2} alt='placeholder' />
                                <div>Low tax</div>
                                <div>2% MARKETING TAX</div>
                            </div>
                        </div>
                        <div className='featItems'>
                            <div className='featItem'>
                                <img className='featImg'src={feat3} alt='placeholder' />
                                <div>Community driven</div>
                                <div>FULLY DECENTRALISED AND COMMUNITY DRIVEN</div>
                            </div>
                            <div className='featItem'>
                                <img className='featImg' src={feat4} alt='placeholder' />
                                <div>Security</div>
                                <div>OWNERSHIP RENOUNCED.</div>
                            </div>
                        </div>
                 </div>

            </div>

        </>
    )   
}