let randomNumber;                         //variable names I learned in unit 2
let randomQuote = '';
let loadQuote = document.getElementById("loadQuote");
const quotes = [                          //This is the list of quotes

  {
    quote: 'A successful website does three things It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation.',
    source: 'Mohamed Saad',
    category: 'Web Design'
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

const backgroundColors = [

  '#b5368f',
  '#5c36b5',
  '#b55c36',
  '#36b59c',
  '#36b55c'

]

function getRandomNumber(x) {                 //This selects a number between 0 and "x" randomly
  return Math.floor( Math.random() * x );
}

function getRandomQuote() {
  randomNumber = getRandomNumber(4);          //All quotes are numbered between 0 and 4 in the array of objects
  let quoteBlock = quotes[randomNumber];      //Created a variable to old the randomquote to return it on line 39
  return quoteBlock;
}

function getRandomColor() {
  randomNumber = getRandomNumber(4);
  return backgroundColors[randomNumber];
}

function setBackgroundColor() {                                         //sets the background color to random color when this function is called
  document.body.style.backgroundColor = getRandomColor();               //learned form: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
}

function printQuote() {
  someRandomQuote = getRandomQuote();
  for (key in someRandomQuote) {
    randomQuote =                                       //Template literals I learned in unit 2
    `
      <p class="quote">${someRandomQuote.quote}</p>
        <p class="source">${someRandomQuote.source}</p>
    `
      if (someRandomQuote.citation) {
        randomQuote +=
        `
        <span class="citation">${someRandomQuote.citation}</span>
        `
      }
      if (someRandomQuote.year) {
          randomQuote +=
          `
          <span class="year">${someRandomQuote.year}</span>
          `
        }
      if (someRandomQuote.category) {
        randomQuote +=
        `
        <span class="category">Category: ${someRandomQuote.category}</span>
        `
      }
    }
  document.getElementById("quote-box").innerHTML = randomQuote;
}

loadQuote.addEventListener('click', () => {           //listenes for user to click button
  printQuote();
  setBackgroundColor();
});

setInterval(function () {                            //After 20 seconds (20000 miliseconds), it calls the two functions to print the random quote, and set a random background color
  printQuote();                                      //learned how to use this function from: https://www.youtube.com/watch?v=ubLC1JxMqfY
  setBackgroundColor();
}, 20000);
