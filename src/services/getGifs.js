import {API_KEY, API_URL} from './settings';

export default function getGifs({keyword}){
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=25&offset=0&rating=g&lang=en`;


  let promise = fetch(apiUrl)
  .then(res => res.json())
  .then(response => {
    const {data = []} = response;
    const gifs = data.map(gif => {
      const {images, title, id} = gif;
      const {url} = images.downsized_medium;
      return {title, id, url};
    })
    return gifs;
})
return promise.then(function(res){
  return res;
})
}