import React from 'react'
import { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel'
import '../styles/content.css'
import Data from './Data'
import img from '../images/foodBackground.jpeg'

const Content = () => {
    
    const [btn, setBtn] = useState(0);
    const [data, setData] = useState(Data);

    useEffect(()=>{
        document.getElementsByClassName('food-option-button')[0].classList.remove('bborder');
        document.getElementsByClassName('food-option-button')[1].classList.remove('bborder');
        document.getElementsByClassName('food-option-button')[2].classList.remove('bborder');

        document.getElementsByClassName('food-option-button')[btn].classList.toggle('bborder');
    
        console.log(document.getElementsByClassName('food-option-button')[btn].classList);
    },[btn]);

    const setVeg = () =>{
        const newData = Data.filter((recipe,index)=>{
            return (recipe.type === '0')
        })
        setData(newData);
        setBtn(1);
    }

    const setNonVeg = () =>{
        const newData = Data.filter((recipe,index)=>{
            return (recipe.type === '1')
        })
        setData(newData);
        setBtn(2);
    }

    const items = data.map((recipe, index) => {
        return (
            <div className='flexy p-4' key={index}>
                <div className="content-card">
                    <div>
                        <img src={img} alt="" className='recipe-img' />
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-4 px-4">
                        <div className="video-name">{recipe.name}</div>
                        <div className="link-button">
                            <a href={recipe.link}>
                                <button className="ui button primary m-0">Link</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const responsive = {
        0: {
            items: 1,
        },
        720: {
            items: 2,
        },
        1250: {
            items: 3,
        },
    };

    return (
        <>
            <div className="px-5 pb-5">
                <div className='subscribe-container d-flex align-items-end justify-content-end'>
                    <a href="https://www.youtube.com/channel/UCqGMgvQQjivA9sR8u0uMBWg?sub-confirmation=1">
                        <button className="ui button subscribe-btn red m-0">Subscribe</button>
                    </a>
                </div>
                <div className='row mx-0 my-2 p-3'>   
                    <div className="col col-4 flexy">
                        <button onClick={()=>{setData(Data);setBtn(0);}} className='ui button food-option-button bborder'>All</button>
                    </div>
                    <div className="col col-4 flexy">
                        <button onClick={()=>{setVeg()}} className='ui button food-option-button'>Veg</button>
                    </div>
                    <div className="col col-4 flexy">
                        <button onClick={()=>{setNonVeg()}} className='ui button food-option-button'>Non-Veg</button>
                    </div>
                </div>
                <div className="content-container d-flex justify-content-center align-items-end">
                    <AliceCarousel
                        className="my-4"
                        mouseTracking
                        infinite
                        autoPlayInterval={1000}
                        animationDuration={1500}
                        disableDotsControls
                        disableButtonsControls
                        responsive={responsive}
                        items={items}
                        autoPlay
                    />
                </div>
            </div>
        </>
    )
}

export default Content
