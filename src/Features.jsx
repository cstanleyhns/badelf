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
                            Stealth Launched on the <span className='highlight'>AVAX Network</span>
                        </div>
                        <p>Bad Elf is a community driven charity project built by experienced developers based in the UK and USA dedicated to bringing joy and warmth to underprivileged children, or children impacting by war during the festive season.</p>
                        <p>A charity wallet containing 5% of the <a className="featLink" href="/">$BADELF</a> supply will be dedicated to a charity of the communities choice.</p>
                        <p>Launching on the AVAX network, <a className="featLink" href="/">$BADELF</a> will have its LP locked and contract renounced to ensure security. Anti sniper bot measures will be in place. No team wallets.</p>
                        <p className='copyLarge'>Total supply 1,000,000,000</p>
                        <p>Please join us on this effort to help spread a little joy on children’s faces this  Christmas!</p>
                    </div>
                    <div className='featItemsGroup'>
                        <div className='featItems'>
                            <div className='featItem'>
                                <img className='featImg' src={feat1} alt='placeholder' />
                                <div className='featItemTitle'>Liquidity locked</div>
                                <div className='featItemCopy'>LOCKED LIQUIDITY</div>
                            </div>
                            <div className='featItem'>
                                <img className='featImg' src={feat2} alt='placeholder' />
                                <div className='featItemTitle'>Low tax</div>
                                <div className='featItemCopy'>2% MARKETING TAX</div>
                            </div>
                        </div>
                        <div className='featItems'>
                            <div className='featItem'>
                                <img className='featImg'src={feat3} alt='placeholder' />
                                <div className='featItemTitle'>Community driven</div>
                                <div className='featItemCopy'>FULLY DECENTRALISED AND COMMUNITY DRIVEN</div>
                            </div>
                            <div className='featItem'>
                                <img className='featImg' src={feat4} alt='placeholder' />
                                <div className='featItemTitle'>Security</div>
                                <div className='featItemCopy'>OWNERSHIP RENOUNCED.</div>
                            </div>
                        </div>
                 </div>

            </div>

        </>
    )   
}