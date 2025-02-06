
//XMLHpprequest =>HTTP 


//creer une nouvelle instance XMLHpprequest
let xhr = new XMLHttpRequest();

//configurer la requete
xhr.open('GET',"api",true);

//definir ce qui se passe lorsque la reponce est recue
// xhr.onload = reqlistener;

//Envoyer la requete
xhr.send();

//gerer les erreur du resa
xhr.onerror = ()=>{};



// let xhr = new XMLHttpRequest();
xhr.open('Get', 'https://api.blablagues.net/?rub=blagues', true);


xhr.onload = function(){
    if (xhr.status>=200 && xhr.status<300){

        // console.log(xhr.responseText);
    }else{
        // console.error("Error",responseText);
    }

}


xhr.onerror = ()=>{
    // console.log('Erreur de resau');
    
}
xhr.send()






fetch("https://api.blablagues.net/?rub=blagues").then((resp)=>resp.json())
.then((blague)=>{
    // console.log(blague.data);
    
})



// const myHeaders = new Headers();
// const init = {
//     method: "GET",
//     headers:myHeaders,
//     mode:"cors",
//     cache:"default",
// }
// fetch("http://facebook.com", init)
 
// .then((res) => console.log(res));


//  let produits = [,saucisse,beure,chocolat];
//  console.log(produits);



const nombres = [1,3,5,7,9];
const double = nombres.map(
   (nombres )=> nombres*2);

// console.log(double);






//  const utilisateur = [
//     {prenom:"maiva",age:16},
//     {prenom:"ange",age:17},
//     {prenom:"merveille",age:18},
//  ];

//  const description = utilisateur.map(utilisateur => `${utilisateur.prenom} a ${utilisateur.age}ans`);

//  console.log(description);


const utilisateur = [
   {prenom:"maiva",age:16},
   {prenom:"ange",age:17},
   {prenom:"merveille",age:18},
];

const description = utilisateur.map(user => `${user.prenom} a ${user.age}ans`);

const descriptString = description.join('\n')

// console.log(descriptString );






const init2 = {
    // method: "POST",
    method: "DELETE",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    pseudo: "rostodev",
    message: "Hello world!",
    }),
    mode: "cors",
    credentials: "same-origin",
    };
    document.querySelector('form').addEventListener('submit', () => {
        fetch("http://localhost:3000/posts/", init2)
        .then(() => console.log('data envoyer'));
    })
    const Delete = document.querySelector('Delete')
    Delete.addEventListener('Delete', () =>{
        fetch("http://localhost:3000/posts/", init2)
        .then(() => console.log('data envoyer'));
    })










// Asynchrone
//-----------------
// **1




setInterval(() => {
// console.log("text");
}, 2000);




//**2
// Promise






// fetch("mon lien").then((res)=> res)
// async/await
async function fecthData() {
await fectch('monlien')
// attend que le await soit exécuté avant de faire la suite
executeFonction();
}




// const fecthData2 = assync () => {
//    await  fectch("monlien")
//     executeFonction();
// }









