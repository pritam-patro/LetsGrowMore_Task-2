let box=document.getElementById("cards"),
API=async()=>{let n=await fetch("https://reqres.in/api/users?page=1"),
a=(await n.json()).data.map((n=>`<div class="card">\n            <br>\n        <div class="profile-image">\n        <br>\n            <img src="${n.avatar}" alt="">\n            <br>\n        </div>\n        <br>\n        <div class="card-content">\n            <h3>Name: ${n.first_name} ${n.last_name}</h3>\n            <br>\n            
<h2>Email: ${n.email}</h2>\n            <br>\n            
<h2>User ID: ${n.id}</h2>\n        </div>\n    </div>`)).join("");
cards.innerHTML=a},navBtn=document.getElementById("push");navBtn.addEventListener("click",(()=>{cards.innerHTML="<h1 class='load'>Loading Users.  .   .   .</h1>",
setTimeout((()=>{API()}),2e3)}));

//minified to get 769b from 1.06kb file size for faster response