const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");

const apiKey ="MQ2jA/d2QYhMbyItNRyQBw==5bRBxZyA4RhoVacv";
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options={
    method :"GET",
    headers:{
        "X-Api-Key":apiKey
    },
}

// function getJoke(){
   
//     fetch(apiUrl,options)
//     .then(response=>response.json())
//     .then(data=>jokeEl.innerText=data[0].joke)

  

// }

    // 2 yol 
async function getJoke(){
    try {
        jokeEl.innerText="Updating...."
        btnEl.disabled=true
        btnEl.innerHTML="Loading"
        const response= await fetch(apiUrl,options);
        const data=await response.json();
        jokeEl.innerText=data[0].joke;
        btnEl.disabled=false
        btnEl.innerText="Tell Me a Joke"
        // console.log(data);
    } catch (error) {
        jokeEl.innerText="Something wrong...."

        btnEl.disabled=false
        btnEl.innerText="Tell Me a Joke"
        console.log(error);
        
    }
   
}


btnEl.addEventListener("click",getJoke);

