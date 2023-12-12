import './Roadmap.css'
import head from './assets/head.png'

export function Roadmap() {

    return (
        <>
            <div className='roadmapContainer'>
                <div className='roadmapMainTitle'>Roadmap
                </div>

                <div className="roadmapGrid">
                    <div className="roadmapGridBox">
                    <img src={head} className="navBarImg" alt="elf head" />
                        <div className='roadmapGridBoxTitle'>Step 1</div>
                        <div>
                            <div className='roadmapGridBoxCopy'>Get fucked up</div>
                            <div className='roadmapGridBoxCopy'>Write a SAFU smart contract</div>
                            <div className='roadmapGridBoxCopy'>Smash an eight ball</div>
                            <div className='roadmapGridBoxCopy'>Deploy SAFU contract</div>
                            <div className='roadmapGridBoxCopy'>Launch on AVAX</div>
                        </div>
                    </div>
                    <div className="roadmapGridBox">
                    <img src={head} className="navBarImg" alt="elf head" />
                        <div className='roadmapGridBoxTitle'>Step 2</div>
                        <div>
                            <div className='roadmapGridBoxCopy'>Fuck bots up</div>
                            <div className='roadmapGridBoxCopy'>Lock LP</div>
                            <div className='roadmapGridBoxCopy'>Get raped by Barbie</div>
                            <div className='roadmapGridBoxCopy'>Renounce SAFU Contract</div>
                        </div>
                    </div>
                    <div className="roadmapGridBox">
                    <img src={head} className="navBarImg" alt="elf head" />
                        <div className='roadmapGridBoxTitle'>Step 3</div>
                        <div>
                            <div className='roadmapGridBoxCopy'>Sober up</div>
                            <div className='roadmapGridBoxCopy'>Tell everyone about $BADELF</div>
                            <div className='roadmapGridBoxCopy'>CMC/CG bla bla</div>
                            <div className='roadmapGridBoxCopy'>Tell community to choose which children to save</div>
                        </div>
                    </div>
                    <div className="roadmapGridBox">
                    <img src={head} className="navBarImg" alt="elf head" />
                        <div className='roadmapGridBoxTitle'>Step 4</div>
                        <div>
                            <div className='roadmapGridBoxCopy'>Build up to Christmas shilling favourite children’s charity bag</div>
                            <div className='roadmapGridBoxCopy'>17 million zillion holders</div>
                            <div className='roadmapGridBoxCopy'>Moon</div>
                            <div className='roadmapGridBoxCopy'>Big donation everyone cheers</div>
                            <div className='roadmapGridBoxCopy'>IDK</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )   
}