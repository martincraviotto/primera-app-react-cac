import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { loadImages } from '../hooks/loadImages';
import { CarouselMemes } from './CarouselMemes';


export const Imgmemes = () => {

  const [imgmeme, setImgmeme] = useState();
  const [textmeme, setTextmeme] = useState();
  const [textmemeLinea2, setTextmemeLinea2] = useState();

  const [losMemes, setLosMemes] = useState([]);

  const handleTextoMeme1 = (e) => {
    setTextmeme(e.target.value);
  }

  const handleTextoMeme2 = (e) => {
    setTextmemeLinea2(e.target.value);
  }

  const handleSelectMeme = (e) => {
    console.log('handleSelectMeme',e.target.currentSrc);
    setImgmeme(e.target.currentSrc);        
  }

  const handleDownload= () => {
    const node = document.getElementById('idExportar');
    html2canvas(node).then(function(canvas) {
        // document.body.appendChild(canvas); -- no necesito volver a mostrarlo
        let img = canvas.toDataURL('memes/jpg');
        let link = document.createElement('a');
        link.download='memepropio.jpg';
        link.href=img;
        link.click();
    });
  }

  const recuperarMemes = async()=>{
    const losMemes = await loadImages();
    console.log('useEfect xxx-->',losMemes.data.memes);
    setLosMemes(losMemes.data.memes);
  }

  useEffect(() => {
    recuperarMemes();
  }, [])
  


  return (
    <>
    
      <h1 className='mt-3 mb-3 text-center'>Editor de memes</h1>
      
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3> Ingresa el texto del meme - Linea 1!!</h3>
            <input 
                className='form-control w-50 m-50 m-auto d-block' 
                placeholder='Pone tu frase' 
                name="meme" 
                aria-label='default input' 
                onChange={handleTextoMeme1}
                />
            <h3> Ingresa el texto del meme - Linea 2!!</h3>
            <input 
                className='form-control w-50 m-50 m-auto d-block' 
                placeholder='Pone tu frase - en Linea 2' 
                name="meme" 
                aria-label='default input' 
                onChange={handleTextoMeme2}
                />  
          </div>
          <div className="col-12 col-md-6">
            <CarouselMemes losMemes={losMemes} handleSelectMeme={handleSelectMeme}/>
          </div>
        </div>        
        <div className="row">
          <div className="col-12">
            <figure className='text-center' id="idExportar">
                <p className='w-100 px-30 position-absolute top-50 start-30 h1 text-center'>
                    {textmeme}
                </p>

                {/* <img src={`./memes/${imgmeme}.jpg`} 
                    alt="meme" 
                    className='figure-img mt-3 d-block m-auto'                
                /> */}
                <img src={`${imgmeme}`}                 
                    alt="meme" 
                    className='img__meme__download'                
                />
            </figure>    
          </div>
        </div>    
        <div className="row">
          <div className="col-12">
            <button 
              onClick={handleDownload}
              type='button' 
              className='btn btn-primary mt-4 bm-4'> 
              Descargar 
            </button>
          </div>    
        </div>    
      </div>
        

                  


        
      </>
  )
}
