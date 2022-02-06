import {Link} from 'wouter';
import './styles.css';

export default function CreateDinamicMenu({titleMenu, arrayMenu}){

    const ListOfMenu = ()=> {
    const menu = arrayMenu 
    ? arrayMenu.map(element =>
        <Link to={`/search/${element}`}><li>
            {`Gifs of ${element}`}
        </li></Link>)
    : <></>;

    return menu
    }

    return <div className={'navMenu'}>{
        <p>{`${titleMenu}🡫`}</p>
        }
        <ul className={"subMenu"}><ListOfMenu /></ul>
            </div>
}