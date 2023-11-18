let quoteArr = [];

// DOM elements from quote-box div
const quoteBox = document.getElementById("quote-box");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const submitBtn = document.getElementById("submit-btn");

// social media DOM elements
const twitter = document.getElementById("twitter");
const facebook = document.getElementById("facebook");
const linkedin = document.getElementById("linkedin");

// additional variables for API(s).
// Dev branch uses placeholder API for testing
const baseURL = "https://dummyjson.com/quotes/";
const twitterURL = "https://twitter.com/intent/tweet?text=";
const facebookURL = "http://www.facebook.com/sharer.php";
// const apiHeader = {
//     method: 'GET',
//     headers: {'X-Api-Key': `${process.env.API_KEY}`},
//     contentType: 'application/json'
// }

// shares quote via Twitter (X)
const twitterShare = function () {
  twitterQuoteURL = encodeURI(
    `${twitterURL}${quote.innerHTML}\n${author.innerHTML}`
  );
  window.open(twitterQuoteURL, "TwitterWindow", (width = 600), (height = 300));
  return false;
};

// copies quote to clipboard
const copyQuote = function () {
  navigator.clipboard.writeText(quote.innerHTML);
  alert("Quote Copied");
};

// populate quotes fetched into quotes Array with some length.
// const populateQuotes = async function() {
//     let randNumOfQuotes = Math.floor(Math.random() * (10 - 5) + 5);
//     for(let i = 1; i <= randNumOfQuotes; i++) {
//         let quoteRes = await getQuotes();
//         let quoteObj = {
//             'quote': quoteRes.quote,
//             'author': quoteRes.author
//         }
//         quoteArr.push(quoteObj);
//     }
// }

// creates a Promise and return quote data asynchronously.
// const getQuotes = async function() {
//     let randId = Math.floor(Math.random() * (100 - 1) + 1);
//     try {
//         let res = await fetch(`${baseURL}${randId}`);
//         return await res.json();
//     } catch(err) {
//         console.error(err);
//     }
// }

// Submit button to generate new quote upon click event
// submitBtn.addEventListener('click', function (evt) {
//     evt.preventDefault()
//     let randQuoteIndex = Math.floor(Math.random() * quoteArr.length);
//     let quoteObj = quoteArr[randQuoteIndex];
//     quote.innerText = quoteObj.quote;
//     author.innerText = quoteObj.author;
// });

// populateQuotes();
// console.log(quoteArr);
