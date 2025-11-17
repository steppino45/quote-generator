console.log("Hello, Ifeanyi Chukwuka!");

const quotes = [
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
  },
  {
    quote: "I would like to die on Mars. Just not on impact.",
    author: "Elon Musk",
  },
  {
    quote:
      "The three most harmful addictions are heroin, carbohydrates, and a monthly salary.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote: "Price is what you pay. Value is what you get.",
    author: "Warren Buffett",
  },
  {
    quote:
      "When you innovate, you've got to be prepared for everyone telling you you're nuts.",
    author: "Larry Ellison",
  },
  {
    quote:
      "As there can be no causeless wealth, so there can be no causeless love or any sort of causeless emotion.",
    author: "John Galt",
  },
  {
    quote:
      "The man who damns money has obtained it dishonorably; the man who respects it has earned it.",
    author: "Francisco d'Anconia",
  },
  {
    quote: "Ifeanyi, I saw a cat!",
    author: "Dennis Arinze",
  },
  {
    quote: "Ifeanyi, can you connect me to the internet?",
    author: "Onyinye Arinze",
  },
  {
    quote: "ONYINYE AND DENNIS! BIA EBE A!",
    author: "Mama",
  },
  {
    quote: "Onyinye and Dennis! Have you guys done your assignment?",
    author: "Aunty Doctor",
  },
  {
    quote: "Dennis! Don't play that! Ifeanyi is trying to trap us!",
    author: "Onyinye Arinze",
  },
  {
    quote: "Onyinye, wait. I know what I'm doing.",
    author: "Dennis Arinze",
  },
];

let quoteDisplay = document.getElementById("quote-display");
let authorDisplay = document.getElementById("author-display");
const quoteBtn = document.getElementById("quote-btn");

quoteBtn.addEventListener("click", function () {
  let rand = Math.floor(Math.random() * quotes.length);

  const quoteTxt = quotes[rand].quote;
  const quoteAut = quotes[rand].author;

  quoteDisplay.innerText = `"${quoteTxt}"`;
  authorDisplay.innerText = quoteAut;

  // console.log(quotes[rand].quote, quotes[rand].author);
});

// console.log(quotes[rand]);
