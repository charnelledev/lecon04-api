

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
         <h4>${user.name.last} </h4>

         `
        
    ).join("\n")
}
userDisplay()