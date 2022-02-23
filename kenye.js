//secrch link=kanye rest

function loadQuote() {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => rest(data))
}

function rest(data) {
    console.log(data);
}

// same 


const loadQuote = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => rest(data))
}
const rest = data => {
    const quoteDiv = document.getElementById('quote');
    const div = document.createElement('h3');
    quoteDiv.innerText = data.quote;

}
