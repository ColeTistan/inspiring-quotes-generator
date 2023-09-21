// DOM elements from quote-box div
const quoteBox = document.getElementById('quote-box');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const submitBtn = document.getElementById('submit-btn');

// social media DOM elements
const twitter = document.getElementById('twitter');
const facebook = document.getElementById('facebook');
const linkedin = document.getElementById('linkedin');

// additional variables for API(s).
const baseURL = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';
const link = encodeURI(window.location.href);
const apiHeader = {
    method: 'GET',
    headers: {'X-Api-Key': 'beuxX1kdS+1kt19dZ3krmg==ZUmtHDnlRv2NKU4C'},
    contentType: 'application/json'
}

// Submit button to generate new quote upon click event
submitBtn.addEventListener('click', function (evt) {
    evt.preventDefault()
    fetch(baseURL, apiHeader).then(res => {
        return res.json();
    }).then(data => {
        newQuote = data[0].quote;
        newAuthor = data[0].author;
        quote.innerHTML = newQuote;
        author.innerHTML = `-&nbsp;${newAuthor}`;
        console.log(`${twitter.href}?text="${newQuote}\n${newAuthor}"`)
    }).catch(err => {
        console.error(err);
    })
});
