import './Gif.css';
import {Link} from 'wouter';

export default function GifStructure({id, title, url}){
    return(
  <Link to={`/gif/${id}`} className={'GifContainer'}>
    <h4>{title}</h4>
    <img loading='lazy' alt={url} src={url} />
  </Link>
    )
}