import Spinner from '../Spinner';
import ListOfGifs from '../ListOfGifs';
import LoadGifs from '../../hooks/LoadGifs';

export default function ShowGifs({keyword} = {keyword:null}){
    const {loading, gifs} = keyword ? LoadGifs({keyword}) : LoadGifs();

    return <>
    {loading
        ? <Spinner />
        : <ListOfGifs Gifs={gifs} />
    }
    </>
}