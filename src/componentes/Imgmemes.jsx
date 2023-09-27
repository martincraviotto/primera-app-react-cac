import React, { useState } from 'react';
import html2canvas from 'html2canvas';


export const Imgmemes = () => {

  const [imgmeme, setImgmeme] = useState();
  const [textmeme, setTextmeme] = useState();

  const textomeme = (e) => {
    setTextmeme(e.target.value);
  }

  return (
    <div className='text-center'>
        <h1 className='mt-3 mb-3 text-center'>Editor de memes</h1>
        <h3> Ingresa el texto del meme</h3>
        <input 
            className='form-control w-50 m-50 m-auto d-block' 
            placeholder='Pone tu frase' 
            name="meme" 
            aria-label='default input' 
            onChange={textomeme}
            />

        <figure className='text-center'>
            <p>{textmeme}</p>
            <img src="" alt="" />
        </figure>    
    </div>
  )
}
