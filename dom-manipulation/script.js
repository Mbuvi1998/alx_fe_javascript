// Initialize the quotes array with some sample quotes
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspirational" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", category: "Motivational" },
    { text: "The best way to predict the future is to invent it.", category: "Innovative" }
];

// Function to show a random quote
function showRandomQuote() {
    const filteredQuotes = getFilteredQuotes();
    if (filteredQuotes.length === 0) {
        document.getElementById('quoteDisplay').textContent = "No quotes available.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    const randomQuote = filteredQuotes[randomIndex];
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
    updateCategories();
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';

    // Optionally show the new quote immediately
    showRandomQuote();
}

// Function to update the category filter dropdown
function updateCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    const categories = new Set(quotes.map(quote => quote.category));

    // Clear existing options
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';

    // Populate new categories
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Function to filter quotes based on selected category
function filterQuotes() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    localStorage.setItem('selectedCategory', selectedCategory); // Save selection in local storage
    showRandomQuote();
}

// Function to get filtered quotes
function getFilteredQuotes() {
    const selectedCategory = localStorage.getItem('selectedCategory') || 'all';
    if (selectedCategory === 'all') {
        return quotes;
    }
    return quotes.filter(quote => quote.category === selectedCategory);
}

// Attach event listeners to buttons
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuoteButton').addEventListener('click', addQuote);

// Load last selected filter from local storage on page load
window.addEventListener('DOMContentLoaded', function () {
    const lastCategory = localStorage.getItem('selectedCategory') || 'all';
    document.getElementById('categoryFilter').value = lastCategory;
    updateCategories(); // Populate categories based on the existing quotes
    showRandomQuote(); // Show a random quote on load
});

