import generateJoke from "./generateJoke";
import '../src/styles/style.css';
import laughing from './assets/laughing-emoji.png';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();