export const userService = {
  signIn,
  signOut
}

function signIn(username, password){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch('http://localhost:3001/user/login', requestOptions)
    .then(handleResponse)
    .then(user => {
      if(user.token){
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
}

function signOut(){
  localStorage.removeItem('user');
}

function handleResponse(){

}
