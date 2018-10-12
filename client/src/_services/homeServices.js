export const homeService = {
  getNewPosts
}

function getNewPosts(token){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  };
  return fetch('http://localhost:3001/api/reviews', requestOptions)
    .then(res => {
        if(res.ok){
          return res.json()
        }else{
          console.log("res not ok");
          throw Error(res.statusText);
        }
      })
    .then(posts => {
      console.log(posts);
      return posts;
    })
}
