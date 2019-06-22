let randomNumber;
let randomQuote = '';
let loadQuote = document.getElementById("loadQuote");
const quotes = [

  {
    quote: 'A successful website does three things It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation.',
    source: 'Mohamed Saad'
  },
  {
    quote: 'What separates design from art is that design is meant to be... functional.',
    source: 'Cameron moll'
  },
  {
    quote: 'A brilliant solution to the wrong problem can be worse than no solution at all: Solve the correct problem.',
    source: 'Donald A. Norman',
    citation: 'The Design of Everyday Things',
    year: 'November 5 2013'
  },
  {
    quote: 'Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites.',
    source: 'Jacob Lett',
    citation: 'Bootstrap 4 Quick Start: Responsive Web Design and Development Basics for Beginners'
  },
  {
    quote: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
    source: 'Bill Gates'
  }

];

function getRandomNumber(x) {
  return Math.floor( Math.random() * x ) + 1;
}

function getRandomQuote() {
  randomNumber = getRandomNumber(4);
  let quoteBlock = quotes[randomNumber];
  return quoteBlock;
}

function printQuote() {
  getRandomQuote = getRandomQuote();
  for (key in getRandomQuote) {
    randomQuote =
    `
      <p class="quote">${getRandomQuote.quote}</p>
        <p class="source">${getRandomQuote.source}</p>
    `
      if (getRandomQuote.citation) {
        randomQuote +=
        `
        <span class="citation">${getRandomQuote.citation}</span>
        `
      }
      if (getRandomQuote.year) {
          randomQuote +=
          `
          <span class="year">${getRandomQuote.year}</span>
          `
        }
    }
  document.getElementById("quote-box").innerHTML = randomQuote;
}

loadQuote.addEventListener('click', () => {
  printQuote();
});
