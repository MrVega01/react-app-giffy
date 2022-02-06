import React from 'react';
import GifStructure from '../Gif/GifStructure';
import './styles.css';

function ListOfGifs({Gifs}){
    return <div className='ListOfGifs'>{
      Gifs.map(({id, title, url}) =>
          <GifStructure
              id= {id}
              key= {id}
              title = {title}
              url = {url}       
          />
      )
    }</div>
}
export default React.memo(ListOfGifs);