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
    twitterQuoteURL = encodeURI(`${twitterURL}${quote.innerHTML}\n${author.innerHTML}`)
    window.open(twitterQuoteURL, 'TwitterWindow',width=600,height=300);
    return false;
}

// copies quote to clipboard
const copyQuote = function () {
    navigator.clipboard.writeText(quote.innerHTML);
    alert("Quote Copied")
}

// Submit button to generate new quote upon click event
submitBtn.addEventListener('click', function (evt) {
    evt.preventDefault()
    fetch(baseURL, apiHeader).then(res => {
        return res.json();
    }).then(data => {
        newQuote = data[0].quote;
        newAuthor = data[0].author;
        quote.innerHTML = `&quot;${newQuote}&quot;`;
        author.innerHTML = `- ${newAuthor}`;
        console.log(`${twitter.href}?text="${newQuote}\n${newAuthor}"`)
    }).catch(err => {
        console.error(err);
    })
});
