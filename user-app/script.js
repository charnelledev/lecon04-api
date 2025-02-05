

const userData =[];
const fetchUser = async ()=>{
    await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) =>{
    //  console.log(data.results);
     userData = data.results
        
})
// console.log(userData1);

}
fetchUser1()