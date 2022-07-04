import React, {useState} from 'react';
import {Link, useLocation} from 'wouter';
import './styles.css';
import logo from './giffy.png';

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
  return (
    <nav className="navBar">
      <Link to={'/'}>
          <img className="logoImg" alt="Giffy logo" src={logo} />
      </Link> 
      <form onSubmit={handleSubmit}>
        <div>
          <input className="textInput" onChange={handleChange} placeholder="Search a gif" type="text" value={keyword} />
          <button className="buttonSearch">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" fill="#32afb4" width="1280.000000pt" height="1230.000000pt" viewBox="0 0 1280.000000 1230.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1230.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M5070 12297 c-3 -3 -75 -10 -160 -16 -1054 -75 -2014 -431 -2833 -1048 -373 -282 -752 -664 -1038 -1048 -573 -770 -930 -1712 -1008 -2660 -6 -71 -16 -184 -22 -250 -18 -182 -2 -515 42 -865 112 -902 453 -1756 989 -2475 160 -216 294 -370 500 -575 425 -425 867 -743 1395 -1000 565 -275 1099 -427 1780 -507 218 -25 825 -25 1050 0 409 46 746 117 1108 233 494 159 1051 442 1450 736 64 47 69 49 90 35 12 -8 371 -339 798 -734 1675 -1550 2042 -1889 2092 -1926 70 -54 214 -122 312 -149 66 -18 107 -22 235 -22 179 0 258 17 398 84 106 51 161 88 246 169 85 82 144 163 196 272 66 139 83 220 84 394 1 178 -18 266 -89 410 -88 179 116 -17 -2303 2219 -391 362 -712 664 -712 670 0 6 36 72 81 146 102 171 269 511 347 705 381 954 477 1992 276 2995 -290 1453 -1160 2689 -2436 3461 -178 108 -555 293 -758 372 -602 236 -1219 357 -1910 374 -107 3 -197 3 -200 0z m600 -1882 c621 -84 1194 -328 1675 -712 61 -48 175 -151 254 -228 460 -448 772 -985 925 -1590 72 -284 100 -523 99 -835 -1 -493 -96 -934 -297 -1377 -242 -535 -646 -1024 -1138 -1376 -424 -303 -927 -503 -1478 -589 -128 -20 -183 -22 -465 -22 -282 0 -337 2 -465 22 -387 61 -678 151 -1015 317 -222 109 -368 198 -549 334 -739 557 -1206 1358 -1331 2281 -23 165 -30 507 -16 681 111 1314 957 2436 2191 2906 277 105 575 172 925 207 103 10 566 -2 685 -19z"/></g></svg>
          </button>
        </div>
      </form>
        <div className="contactButton">
          <Link to={'/contact'}>Contact</Link>
        </div>
    </nav>
  );
}