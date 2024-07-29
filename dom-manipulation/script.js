// Initialize the quotes array with some sample quotes
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspirational" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", category: "Motivational" },
    { text: "The best way to predict the future is to invent it.", category: "Innovative" }
];

// Function to display a random quote
function showRandomQuote() {
    if (quotes.length === 0) {
        document.getElementById('quoteDisplay').textContent = "No quotes available.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quoteDisplay').textContent = `"${randomQuote.text}" — ${randomQuote.category}`;
}

// Function to add a new quote
function addQuote() {
    const quoteText = document.getElementById('newQuoteText').value.trim();
    const quoteCategory = document.getElementById('newQuoteCategory').value.trim();

    if (quoteText === '' || quoteCategory === '') {
        alert('Please enter both quote text and category.');
        return;
    }

    quotes.push({ text: quoteText, category: quoteCategory });

    // Clear input fields
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';

    // Optionally show the new quote immediately
    showRandomQuote();
}

// Attach event listeners to buttons
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuoteButton').addEventListener('click', addQuote);

// Optional: Show an initial quote on page load
window.addEventListener('DOMContentLoaded', function () {
    showRandomQuote();
});
