const apiKey = "vqD3QgDdjtPjfwTmvASTDm2ZqGw1XG1C&q";

export default function getGifs({keyword}){
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiUrl)
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
}