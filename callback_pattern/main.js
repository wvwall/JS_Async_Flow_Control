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
const postId = 13;

function getPost(id, succesCb, errorCb){
    fetch(BASE_URL + "/posts/" + id )
    .then(response => response.json())
    .then(data => {
        succesCb(data)
    })
    .catch(error => {
        errorCb(error)
    })
}

function getUser(id, succesCb, errorCb){
    fetch(BASE_URL + "/users/" + id )
    .then(response => response.json())
    .then(data => {
        succesCb(data)
    })
    .catch(error => {
        errorCb(error)
    })
}

getPost(postId, (data)=> {
    console.log("Post:", data)
    getUser(data.userId,(data)=> {
        console.log("User:", data)
    },(error) => {
        console.error(error);
    })
}, (error)=> {
    console.error(error);
});
