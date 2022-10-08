import {useEffect, useState, useContext} from 'react';
import getGifs from 'services/getGifs';
import getTheme from 'services/getTheme';
import GifsContext from 'context/GifsContext';

export default function LoadGifs({keyword} = {keyword: ''}){
    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifsContext);
  
    useEffect(function(){
      setLoading(true);

      const newKeyword = keyword || getTheme();

      getGifs({keyword: newKeyword})
      .then(gif =>{
        setGifs(gif)
        setLoading(false)
      });
    }, [keyword, setGifs]);

    return {loading, gifs};
}