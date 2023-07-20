// https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,racist,explicit

const button = document.getElementById('button');
const jokeSetup = document.getElementById('joke-setup');
const jokeDelivery = document.getElementById('joke-delivery');
const jokeContainer = document.getElementById('joke-container');
const helperText = document.getElementById('helper-text');

//Get Joke
async function getJoke() {
    jokeContainer.removeAttribute("hidden");
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,racist,explicit');
    const data = await response.json();
    console.log(data);
    if(data.type === 'twopart'){
        jokeDelivery.hidden = false;
        jokeDelivery.classList.add('blured');
        jokeSetup.innerText = data.setup;
        jokeDelivery.addEventListener('click', () => {
            jokeDelivery.classList.remove('blured');
        })
        jokeDelivery.innerText = data.delivery;
    } else { 
        jokeDelivery.hidden = true;
        jokeSetup.innerText = data.joke;
    }
   
}




button.addEventListener('click', getJoke)