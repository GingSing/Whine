export const userService = {
  signIn,
  signOut,
  postItem,
  register,
}

function signIn(username, password){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };
  return fetch('http://localhost:3001/user/login', requestOptions)
    .then(res => {
      if(res.ok){
        return res.json()
      }else{
        console.log("res not ok");
        throw Error(res.statusText);
      }
    })
    .then(user => {
      if(user && user.success === "successful"){
        localStorage.setItem('user', user.user);
      }
      return user;
    });
}

function register(){

}

function postItem(title, content, pictures){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({title, content, pictures})
  };
  return fetch('http://localhost:3001/api/reviewItem', requestOptions)
    .then(res => {
      if(res.ok){
        return res.json()
      }else{
        console.log("res not ok");
        throw Error(res.statusText);
      }
    })
    .then(post => {

    })
}

function signOut(){
  localStorage.removeItem('user');
}
