import React from 'react'
import { CarouselMemeItem } from './CarouselMemeItem'

export const CarouselMemes = ({losMemes,handleSelectMeme}) => {
  return (
    <>
        <div id="carouselMemeIndicators" className="carousel slide">
            <div className="carousel-indicators">
                {
                    losMemes.map((meme,index)=>{
                        return <button 
                                    type="button" data-bs-target="#carouselMemeIndicators" 
                                    data-bs-slide-to={index}
                                    className="active" 
                                    aria-current="true" 
                                    aria-label="`Slide ${index}`">
                                </button>
                    })
                }                   
            </div> 
            <div className="carousel-inner">
                {
                    losMemes.map((meme,index)=>{
                        return <CarouselMemeItem 
                                    key={meme.id} 
                                    index={index} 
                                    {...meme} 
                                    handleSelectMeme={handleSelectMeme}/>
                    })
                }                 
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselMemeIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselMemeIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}
