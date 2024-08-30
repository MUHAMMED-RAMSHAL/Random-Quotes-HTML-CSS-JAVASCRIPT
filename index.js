const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/radom";

async function getQuote() {
  const response = await fetch(apiURL);

  const data = await response.Json();

  const quoteContent = data.content;
  const quoteAuthor = data.author;
  quoteEl.innerText = quoteContent;
  quoteEl.innerText = "~" + quoteAuthor;

  console.log(data);
}

btnEl.addEventListener("click", getQuote);
