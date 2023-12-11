import './Poem.css'
import elfStanding from './assets/elf-standing.png'
import elfSpanked from './assets/elf-spanked.png'
import elfBlow from './assets/elf-blow.png'
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
                    <img className='poemImage' src={elfStanding} alt='elf' />   
                    <div className='poemCopy'>In the moon's soft, silvery light,
                                    A naughty elf partied through the night. 
                                    With cans of lager and a sack of blow,
                                    He partied and danced in the snow.</div>  

                    </div>
                    <div className='poemItem'>
                    <div className='poemCopy'>In the moon's soft, silvery light,
                                    A naughty elf partied through the night. 
                                    With cans of lager and a sack of blow,
                                    He partied and danced in the snow.</div>  

                    </div>
                    <div className='poemItem'>
                    <img className='poemImage' src={elfBlow} alt='elf' />   
                    <div className='poemCopy'>In the moon's soft, silvery light,
                                    A naughty elf partied through the night. 
                                    With cans of lager and a sack of blow,
                                    He partied and danced in the snow.</div>  

                    </div>
                    <div className='poemItem'>
                    <div className='poemCopy'>In the moon's soft, silvery light,
                                    A naughty elf partied through the night. 
                                    With cans of lager and a sack of blow,
                                    He partied and danced in the snow.</div>  

                    </div>
                
                </div>
            </div>
        </>
    )   
}