const headerBlague = document.getElementById("header")
const textBlague = document.getElementById("content")

function Blague(){
    
    fetch("https://api.blablagues.net/?rub=blagues")
    .then((resp)=> resp.json())
    .then((info)=>{
        headerBlague.textContent= info.data.content.text_head
        textBlague.textContent = info.data.content.text
        
    })
}
Blague()
btn.addEventListener('click', Blague)


const myHeaders = new Headers();
const init = {
    method: "GET",
    headers:myHeaders,
    mode:"no-cors",
    cache:"default",
}

fetch("http://facebook.com", init)
 
.then((res) => console.log(res));






