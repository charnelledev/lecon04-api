

let userData =[];
const fetchUser = async () => {
    await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => userData = data.results)
    //  console.log(data.results)
        
console.log(userData);

}
fetchUser()



const userDisplay = async () =>{
    await fetchUser()
    document.body.innerHTML = userData.map(
        (user)=>
         `
        <div class="card">
        <img src="${user.picture.large}" alt=" la   photo de ${user.name.last}" />
         <h4>${user.name.last} </h4>
         <p> ${user.location.city}, ${user.dob.date}</p>
         <i> Membre depuis ${user.registered
            .date}
         </div>
         `
        
    ).join("")
}
userDisplay()