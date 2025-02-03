
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



let xhr = new XMLHttpRequest();
xhr.open('Get', 'https://api.blablagues.net/?rub=blagues', true);


xhr.onload = function(){
    if (xhr.status>=200 && xhr.status<300){

        console.log(xhr.responseText);
    }else{
        console.error("Error",responseText);
    }

}


xhr.onerror = ()=>{
    // console.log('Erreur de resau');
    
}
xhr.send()






fetch("https://api.blablagues.net/?rub=blagues").then((resp)=>resp.json())
.then((blague)=>{
    console.log(blague.data);
    
})