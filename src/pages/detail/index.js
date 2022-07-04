import LoadContext from '../../hooks/LoadContext';

export default function DetailGif({params}){

    const gifs = LoadContext();
    const gif = gifs.find(single => single.id === params.id)

    return <div>
            <h3>{gif.title}</h3>
            <img alt={gif.title} src={gif.url} />
        </div>
}