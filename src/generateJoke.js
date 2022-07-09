import axios from "axios";

const generateJoke = ( func ) => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };

    axios.get( 'https://icanhazdadjoke.com', config ).then( res => {
        func( res.data.joke );
    });
}

export default generateJoke;