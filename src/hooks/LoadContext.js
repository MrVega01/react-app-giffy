import {useContext} from 'react';
import GifsContext from 'context/GifsContext';

export default function LoadContext(){
    const {gifs} = useContext(GifsContext);
    return gifs
}