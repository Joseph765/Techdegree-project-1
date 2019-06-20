let randomNumber;
let quote = document.getElementById('quote');
let source = document.getElementById('source');
let citation = document.getElementById('citation');
let year = document.getElementById('year');
const quotes = [

  {
    Quote: 'A successful website does three things It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation.',
    Person: 'Mohamed Saad'
  },
  {
    Quote: 'What separates design from art is that design is meant to be... functional.',
    Person: 'Cameron moll'
  },
  {
    Quote: 'A brilliant solution to the wrong problem can be worse than no solution at all: Solve the correct problem.',
    Person: 'Donald A. Norman',
    Citation: 'The Design of Everyday Things',
    Year: 'November 5 2013'
  },
  {
    Quote: 'Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites.',
    Person: 'Jacob Lett',
    Citation: 'Bootstrap 4 Quick Start: Responsive Web Design and Development Basics for Beginners'
  },
  {
    Quote: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
    Person: 'Bill Gates'
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
  quote.textContent = getRandomQuote();
}

printQuote();
