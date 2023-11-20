let quoteArr = [];

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
const twitterURL = "https://twitter.com/intent/tweet?text="
const facebookURL = "http://www.facebook.com/sharer.php";
const apiHeader = {
    method: 'GET',
    headers: {'X-Api-Key': 'beuxX1kdS+1kt19dZ3krmg==ZUmtHDnlRv2NKU4C'},
    contentType: 'application/json'
}

// shares quote via Twitter (X)
const twitterShare = function () {
    twitterQuoteURL = encodeURI(`${twitterURL}${quote.innerHTML}\n - ${author.innerHTML}`)
    window.open(twitterQuoteURL, 'TwitterWindow',width=600,height=300);
    return false;
}

// copies quote to clipboard
const copyQuote = function () {
    let quoteBoxText = `${quote.innerText} - ${author.innerText}`;
    navigator.clipboard.writeText(quoteBoxText);
    alert("Quote Copied");
}

// creates a Promise and return quote data asynchronously.
const getQuotes = async function() {
    try {
        let res = await fetch(baseURL, apiHeader);
        return await res.json();
    } catch(err) {
        console.error(err);
    }
}

// populate quotes fetched into quotes Array with some length.
const populateQuotes = async function() {
    let randNumOfQuotes = Math.floor(Math.random() * (10 - 5) + 5);
    for(let i = 0; i <= randNumOfQuotes; i++) {
        let quoteRes = await getQuotes();
        quoteArr.push(quoteRes[0]);
        console.log(quoteArr);
    }
}

// Submit button to generate new quote upon click event
submitBtn.addEventListener('click', function (evt) {
    evt.preventDefault()
    let randQuoteIndex = Math.floor(Math.random() * quoteArr.length);
    let quoteObj = quoteArr[randQuoteIndex];
    quote.innerText = quoteObj.quote;
    author.innerText = quoteObj.author;
});

populateQuotes();
console.log(quoteArr);