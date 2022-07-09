import generateJoke from "./generateJoke";
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeDisplay = ( res ) => {
    const joke = document.getElementById('joke');
    joke.innerText = res;
}

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener( 'click', () => generateJoke(jokeDisplay) );

generateJoke( jokeDisplay );