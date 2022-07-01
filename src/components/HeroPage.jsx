import React from 'react'
import gengar from '../images/gengar.png'
import srima from '../images/srima.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import '../styles/heropage.css'

const HeroPage = () => {

    const { text } = useTypewriter({
        words: ['Youtuber', 'Housewife', 'Chef'],
        loop: 0
    })
    return (
        <>
        <div className="flexy">
            <div className="row heropage mx-0">
                <div className="col col-lg-6 col-12 my-4 hero-text flexy">
                    <div>
                        Hello, My name is Srima and <br />
                        I am a&nbsp;
                        <span className='typing-effect text-danger'>
                            {text}<Cursor cursorStyle='_' />
                        </span>
                    </div>
                </div>
                <div className="col col-lg-6 col-12 my-4 flexy">
                    <div>
                        <img className='hero-img' src={gengar} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroPage
