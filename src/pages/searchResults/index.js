import ShowGifs from '../../components/ShowGifs';

export default function SearchResponse({params}){
  const {keyword} = params;

  return <ShowGifs keyword={keyword} />
}