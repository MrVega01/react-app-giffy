import './styles.css';
import {Link} from 'wouter';

export default function Category({title, list}){
    return(
        <div className="categoryContainer">
            <h3>{title}</h3>
            <ul>
            {
                list.map((trend,i)=> <li key={i}><Link to={`/search/${trend}`}> - {trend} - </Link></li>)
            }
            </ul>
        </div>
    )
}