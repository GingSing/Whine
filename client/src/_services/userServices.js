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

      let {ok, statusText} = res;

      if(ok){
        return res.json()
      }
      console.log("res not ok");
      throw Error(statusText);
    })
    .then(data => {

      let {user, success, token} = data;

      if(user && token && success === "successful"){
        localStorage.setItem('user', user);
        localStorage.setItem('token', token);
      }
      return user;
    });
}

function register(){

}

function postItem(username, title, content, rating, pictures, item){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, title, content, rating, pictures, item})
  };
  return fetch('http://localhost:3001/api/item/review', requestOptions)
    .then(res => {
      if(res.ok){
        return res.json()
      }else{
        console.log("res not ok");
        throw Error(res.statusText);
      }
    });
}

function signOut(){
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  window.location.reload(); //quickfix
}
