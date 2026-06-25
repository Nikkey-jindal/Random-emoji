const emoji=document.getElementById("emoji");
const des=document.getElementById("des");
let result=[];
async function fetchapi() {
    let response=await fetch('https://emoji-api.com/emojis?access_key=2e1f7291e1fc70eac0631c9826d66ec3d65b48bb');
   result=await response.json();
   console.log(result);
    
}
fetchapi();
emoji.addEventListener('click',()=>{
    let random=Math.floor(Math.random()*result.length);
    console.log(random);
    emoji.innerText=result[random].character;
    emoji.style.width="200px"
    // emoji.innerHTML=result[random].unicodeName;


})