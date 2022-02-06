import {useContext} from 'react';
import GifsContext from '../../context/GifsContext';

export default function DetailGif({params}){

    const {gifs} = useContext(GifsContext);
    const gif = gifs.find(single => single.id === params.id)

    return <div>
            <h3>{gif.title}</h3>
            <img alt={gif.title} src={gif.url} />
        </div>
}