

let userData =[];
const fetchUser = async () => {
    await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => userData = data.results)
    //  console.log(data.results)
        
// console.log(userData);

}
fetchUser()



const userDisplay = async () =>{
    await fetchUser()

    const  dateParser = (date) =>{
        const newDate = new Date(date).toLocaleDateString("fr-FR",{
            year: "numeric",
            month: "long",
            day: "numeric",
            hour:"numeric"
        })
        // console.log(newDate);
        
        return newDate
    }

    const calday = (date) =>{
        const today = new Date()
        console.log(today);
        
        const todayTimestamp = Date.parse(today)
        console.log(todayTimestamp);

       
        const timestamp = Date.parse("2003-07-31T02:09:37.067Z" )
        // console.log((todayTimestamp - timestamp)/(1000*60*60*24));/
        
        return Math.floor ((todayTimestamp - timestamp)/(1000*60*60*24))
    }

    calday()
    document.body.innerHTML = userData.map(
        (user)=>
         `
        <div class="card">
        <img src="${user.picture.large}" alt=" la   photo de ${user.name.last}" />
         <h4>${user.name.last} </h4>
         <p> ${user.location.city}, ${ dateParser(user.dob.date)}</p>
         <i> Membre depuis ${calday(user.registered
            .date)} jours
         </div>
         `
        
    ).join("")
}
userDisplay()

// // Date de référence
// const dateReference = new Date("2008-02-26T22:45:40.750Z");

// // Date actuelle
// const dateActuelle = new Date();

// // Calcul de la différence en millisecondes
// const differenceMs = dateActuelle - dateReference;

// // Conversion en jours (1 jour = 1000 ms * 60 s * 60 min * 24 h)
// const differenceJours = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

// console.log(Nombre de jours écoulés : ${differenceJours});