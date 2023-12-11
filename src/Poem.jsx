import './Poem.css'
import elfStanding from './assets/elf-standing.png'
import elfSpanked from './assets/elf-spanked.png'
import elfBlow from './assets/elf-blow.png'
import elfSick from './assets/elf-sick.png'
import snow from './assets/pagebreak.png'

export function Poem() {


    return (
        <>
            <div className='poemWrapper'>
                <div className='poemContainer'>
                  <div className='poemTitle'><span className='highlight'>Once upon a time...</span></div>
                  <div className='poemItem'>
                    <img className='poemImage' src={elfStanding} alt='elf' />
                    <div className='poemCopy'>In the moon's soft, silvery light,
                                    A naughty elf partied through the night. 
                                    With cans of lager and a sack of blow,
                                    He partied and danced in the snow.</div>  
                    </div>
                    <div className='poemItem'>
                    <div className='poemCopy'>He drank with vigor, from dusk till dawn,
                                        After eating magic mushrooms his senses were torn.
                                        Romanced Barbie dolls, in a fanciful spree,
                                        Did he put a condom on? No, don’t be silly.</div>  
                                    <img className='poemImage' src={elfSpanked} alt='elf' />
                    </div>
                    <div className='poemItem'>
                        <img className='poemImage' src={elfSick} alt='elf' />   
                        <div className='poemCopy'>So with a throbbing head and a sense of dread,
                                    He set to work, no more to be said.
                                    Gathering gifts with a magical touch,
                                    For he owed the children that much.</div>  

                    </div>
                    <div className='poemItem'>
                        <div className='poemCopy'>Through every chimney, at every bed,
                                He left presents, just as Santa said.
                                Toys and candies, joy and cheer,
                                To make amends for his blunder last year.</div>  

                    </div>
                    <div className='poemItem'>
                       <div className='poemCopy'>As the sun rose and the children smiled,
                                The elf felt a warmth, tender and mild.
                                Despite his hangover, and the night's wild mess,
                                He'd brought back Christmas, no more, no less.</div>  
                    
                    </div>
                    <div className='poemItemFinal'>
                         <img className='poemImageFinal' src={elfBlow} alt='elf' />   
                    </div>
                </div>
            </div>
            {/* <div className='poemWrapper'>
                <div className='poemContainer'>
   
                 
                    <div className='poemTitle'><span className='highlight'>Once upon a time...</span></div>
                    <div className='poemItem'>
                    <img className='poemImage' src={elfStanding} alt='elf' />
                    <div className='poemCopy'>In the moon's soft, silvery light,
                                    A naughty elf partied through the night. 
                                    With cans of lager and a sack of blow,
                                    He partied and danced in the snow.</div>  
                    </div>
                    <div className='poemItem'>
                    <div className='poemCopy'>He drank with vigor, from dusk till dawn,
                                        After eating magic mushrooms his senses were torn.
                                        Romanced Barbie dolls, in a fanciful spree,
                                        Did he put a condom on? No, don’t be silly.</div>  
                                    <img className='poemImage' src={elfSpanked} alt='elf' />
                    </div>
                    <div className='poemItem'>
           
                    <div className='poemCopy'>But his mischief led to a dire plight,
                                For he ruined Christmas, oh, what a sight!
                                Toys scattered, stockings empty, a terrible fray,
                            He had to fix this before the break of day.</div>  

                    </div>
                    <div className='poemItem'>
                    <img className='poemImage' src={elfSick} alt='elf' />   
                    <div className='poemCopy'>So with a throbbing head and a sense of dread,
                                He set to work, no more to be said.
                                Gathering gifts with a magical touch,
                                For he owed the children that much.</div>  

                    </div>
                    <div className='poemItem'>

                    <div className='poemCopy'>Through every chimney, at every bed,
                                He left presents, just as Santa said.
                                Toys and candies, joy and cheer,
                                To make amends for his blunder last year.</div>  

                    </div>
                    <div className='poemItem'>
                    <div className='poemCopy'>As the sun rose and the children smiled,
                                The elf felt a warmth, tender and mild.
                                Despite his hangover, and the night's wild mess,
                                He'd brought back Christmas, no more, no less.</div>  
                    
                    </div>
                    <div className='poemItemFinal'>
                         <img className='poemImageFinal' src={elfBlow} alt='elf' />   
                    </div>
                </div>
            </div> */}
        </>
    )   
}