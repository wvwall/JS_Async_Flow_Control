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

// async function getPost(id){
//     const response = await fetch(BASE_URL + "/posts/" + id )
//     const data = await response.json()
//     return data
// }
// async function getUser(id){
//     const response = await fetch(BASE_URL + "/users/" + id )
//     const data = await response.json()
//     return data
// }
async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}
async function init() {
    try {
        const post = await getData(BASE_URL + "/posts/" + postId)
        const user = await getData(BASE_URL + "/users/" + post.userId)
        console.log("Post:", post);
        console.log("User:", user);
    } catch (error) {
        console.error(error);
    }
    
}
 init();
