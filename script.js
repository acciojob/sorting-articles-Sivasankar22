//your JS code here. If required.
// Data for the articles
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to sort the articles while ignoring certain words
function sortArticles(articles) {
    return articles.sort((a, b) => {
        // Function to remove specified words from the article title
        const removeWords = title => title.replace(/^(a |an |the )/i, '');

        // Get the cleaned titles by removing specified words
        const cleanA = removeWords(a);
        const cleanB = removeWords(b);

        // Compare the cleaned titles for sorting
        if (cleanA < cleanB) {
            return -1;
        } else if (cleanA > cleanB) {
            return 1;
        } else {
            return 0;
        }
    });
}

// Get the ul element by id
const ul = document.getElementById('band');

// Sort the articles
const sortedBands = sortArticles(bands);

// Create li elements for each sorted article and append them to the ul
sortedBands.forEach(article => {
    const li = document.createElement('li');
    li.textContent = article;
    ul.appendChild(li);
});
