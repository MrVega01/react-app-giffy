import { useState, useEffect, useRef } from "react";
import getTrending from "services/getTrending";
import Category from "../Category";
function TrendingSearches(){
    const [trends, setTrends] = useState([]);
    useEffect(()=>{
        getTrending().then(setTrends);
    },[])

    return <Category title="Tendencias" list={trends}/>
}
export default function LazyTrendingSearches(){
    const [show, setShow] = useState(false);

    const refLazyTrendring = useRef();

    useEffect(()=>{
        const onChange = (entries, observer)=>{
            const el = entries[0];
            console.log(el.isIntersecting)
            if (el.isIntersecting){
                observer.disconnect();
                setShow(true);
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        });
        observer.observe(refLazyTrendring.current);
    },[])

    return(
        <div ref={refLazyTrendring}>
            {show ? <TrendingSearches/> : ''}
        </div>
    )
}