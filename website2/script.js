// Optional: Rotate quotes (basic example)
const quotes = [
  "Discipline is destiny.",
  "Execute like a machine, think like a philosopher.",
  "You don’t rise to the level of your goals — you fall to the level of your systems.",
];

const quoteText = document.getElementById("quote-text");
quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
