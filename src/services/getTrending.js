import {API_KEY, API_URL} from './settings';

export default function getTrending(){
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiUrl)
  .then(res => res.json())
  .then(response => {
  const {data = []} = response;
  return data
})
}