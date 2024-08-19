let currentjokes = [];
 
async function GetJoke() {
  const res = await fetch("https://icanhazdadjoke.com/",{
    headers:{ 
      Accept:"application/json",
    }
  });


  const joke = await res.json();
  console.log(joke);
 
  return joke;
}


async function setjoke(params) {

  for (let i = 0; i<10; i++) {
    const { joke }= await GetJoke();
    addjoke(joke)
    
  }
 
  
}

  


function addjoke(joke){
    /*create elements below*/
    const jokedisplay = document.querySelector(".jokedisplay");
    const jokebody = document.createElement("div");
    const joketext= document.createElement("p");
    const newtext = document.createTextNode(joke);
    /*add classes below*/
    jokebody.classList.add("joke");
    /*combine elements below*/
    joketext.appendChild(newtext);
    jokebody.appendChild(joketext);
    jokedisplay.appendChild(jokebody);
    
}