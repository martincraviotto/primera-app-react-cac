import React from 'react'

export const CarouselMemeItem = ({index,height,id,name,url,handleSelectMeme}) => {
    const active = index === 0 ? 'active' : '';

return (
    <div className={`carousel-item ${active}`}>
        <img className="img__meme" src={url} alt="Imagen meme"
            onClick={handleSelectMeme}/>
    </div>    
  )
}
