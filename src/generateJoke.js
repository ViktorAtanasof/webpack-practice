async function generateJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });
        const data = await response.json();
        const joke = document.getElementById('joke').textContent = data.joke;
        return joke;
    } catch (err) {
        console.log(err);
    }
}

export default generateJoke;