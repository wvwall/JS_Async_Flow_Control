# JS_Async_Flow_Control

## Milestone 1

Per gestire l'asincronia tra le chiamate API utilizzeremo il **Callback Pattern**:

[https://developer.mozilla.org/en-US/docs/Glossary/Callback_function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) 

Una **funzione di callback** è una funzione passata a un'altra funzione come argomento, che viene quindi invocata all'interno della funzione esterna per completare un qualche tipo di routine o azione solitamente asincrona in modo da intercettare un evento o valore futuro.

**Fetch API** è promise based; vedremo le promesse in dettaglio nella prossima milestone, nel frattempo limitiamoci a implementarla come descritto nella sua documentazione.

## Milestone 2

Per gestire l'asincronia tra le chiamate API utilizzeremo il **Promise Pattern**:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 

Molte API native del browser (come Fetch) o librerie si basano già sulle promesse, per cui non sarà necessario crearle da zero attraverso il costruttore Promise.

## Milestone 3

Per gestire l'asincronia tra le chiamate API utilizzeremo le **Async Functions**:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) 

Le funzionalità di **async/await** si basano fortemente sulle Promise e rappresentano quello che in gergo viene definito *syntactic sugar*, ovvero una dei costrutti sintattici che non hanno effetti sulle funzionalità, ma semplificano l'implementazione per il developer.
