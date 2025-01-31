
//XMLHpprequest =>HTTP 


//creer une nouvelle instance XMLHpprequest
let xhr = new XMLHttpRequest();

//configurer la requete
xhr.open('GET',"api",true);

//definir ce qui se passe lorsque la reponce est recue
xhr.onload = reqlistener;

//Envoyer la requete
xhr.send();

//gerer les erreur du resaux
xhr.onerror = ()=>{};
