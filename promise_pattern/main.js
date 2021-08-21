// In sintesi:

// - recupero un **post** via API tramite id
// - utilizzo l'userId dell'oggetto post per recuperare un **utente**
// - stampo entrambe le info tramite **console.log**

// Per poter affrontare l'esercizio è necessario aver completato tutti i moduli js, in particolare variabili, array, oggetti, functions, API.

// Per il **mock delle API** utilizzeremo il servizio [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/) con i seguenti endpoint:

// *https://jsonplaceholder.typicode.com/posts/${id}*

// *https://jsonplaceholder.typicode.com/users/${id}*

// Per le chiamate ai servizi utilizzeremo la **Fetch API** del browser:

// [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

const BASE_URL = "https://jsonplaceholder.typicode.com";
const postId = 1;

function getPost(id){
  return fetch(BASE_URL + "/posts/" + id )
    .then(response => response.json())
}
function getUser(id){
    return fetch(BASE_URL + "/users/" + id )
      .then(response => response.json())
  }
getPost(postId)
.then(post => {
    console.log("Post:", post)
    return getUser(post.userId)
})
.then(user => {
    console.log("User:", user);
})
.catch(error => {
    console.error(error);
})

