import React, {useState} from 'react';
import {Link, useLocation} from 'wouter';
import CreateDinamicMenu from '../../components/createDinamicMenu';
import logo from './giffy.png';
import './styles.css';

export default function Nav(){
  const [keyword, setKeyword] = useState('');
  const [location, pushLocation] = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  }
  const handleChange = evt => {
    setKeyword(evt.target.value);
  }
    return <nav className="navBar">
{
<Link to={'/'}>
    <img className="logoImg" alt="Giffy logo" src={logo} />
</Link>
}
<form onSubmit={handleSubmit}>
  <input className="textInput" onChange={handleChange} placeholder="Search a gif" type="text" value={keyword} />
  <input className="buttonSearch" type="submit" value="Search" />
</form>
{
<CreateDinamicMenu titleMenu="Popular gifs" arrayMenu={["Animals","Programming", "React", "Minecraft"]} />
}
</nav>
}