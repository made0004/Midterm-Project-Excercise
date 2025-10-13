
const fantasyMovies = [
    {
        id: 1,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        year: 2001,
        genre: "Epic Fantasy",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 2,
        title: "Harry Potter and the Sorcerer's Stone",
        director: "Chris Columbus",
        year: 2001,
        genre: "Fantasy Adventure",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 3,
        title: "Pan's Labyrinth",
        director: "Guillermo del Toro",
        year: 2006,
        genre: "Dark Fantasy",
        targetAudience: "Adults",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 4,
        title: "The Wizard of Oz",
        director: "Victor Fleming",
        year: 1939,
        genre: "Musical Fantasy",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 5,
        title: "Labyrinth",
        director: "Jim Henson",
        year: 1986,
        genre: "Adventure Fantasy",
        targetAudience: "Teen/Adults",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 6,
        title: "Conan the Barbarian",
        director: "John Milius",
        year: 1982,
        genre: "Sword and Sorcery",
        targetAudience: "Adults",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 7,
        title: "Excalibur",
        director: "John Boorman",
        year: 1981,
        genre: "Arthurian Legend",
        targetAudience: "Adults",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 8,
        title: "Willow",
        director: "Ron Howard",
        year: 1988,
        genre: "Adventure Fantasy",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 9,
        title: "The Dark Crystal",
        director: "Jim Henson, Frank Oz",
        year: 1982,
        genre: "Dark Fantasy",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 10,
        title: "Clash of the Titans",
        director: "Desmond Davis",
        year: 1981,
        genre: "Mythological Fantasy",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 11,
        title: "Big Fish",
        director: "Tim Burton",
        year: 2003,
        genre: "Magical Realism",
        targetAudience: "Adults",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 12,
        title: "Time Bandits",
        director: "Terry Gilliam",
        year: 1981,
        genre: "Time Travel Fantasy",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 13,
        title: "Stardust",
        director: "Matthew Vaughn",
        year: 2007,
        genre: "Romantic Fantasy",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 14,
        title: "Highlander",
        director: "Russell Mulcahy",
        year: 1986,
        genre: "Urban Fantasy",
        targetAudience: "Adults",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 15,
        title: "The Princess Bride",
        director: "Rob Reiner",
        year: 1987,
        genre: "Fairy Tale",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 16,
        title: "Crouching Tiger, Hidden Dragon",
        director: "Ang Lee",
        year: 2000,
        genre: "Wuxia Fantasy",
        targetAudience: "Adults",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 17,
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        year: 2001,
        genre: "Anime Fantasy",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 18,
        title: "Edward Scissorhands",
        director: "Tim Burton",
        year: 1990,
        genre: "Gothic Fantasy",
        targetAudience: "Teen/Adults",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 19,
        title: "Ghostbusters",
        director: "Ivan Reitman",
        year: 1984,
        genre: "Supernatural Comedy",
        targetAudience: "All Ages",
        releaseFormat: "Theatrical & Streaming"
    },
    {
        id: 20,
        title: "Beetlejuice",
        director: "Tim Burton",
        year: 1988,
        genre: "Dark Comedy Fantasy",
        targetAudience: "Teen/Adults",
        releaseFormat: "Theatrical & Streaming"
    }
];

/**
 * 2. DOM & UTILITIES
 */
const cardDisplay = document.getElementById('card-display');
const sortForm = document.getElementById('sort-form');

/**
 * Creates the HTML string for a single movie card using BEM classes.
 * @param {Object} movie - The movie data object.
 * @returns {string} The HTML string for the movie card.
 */
const createCardHTML = (movie) => {
    // Sanitize the title
    const imagePrompt = movie.title.toLowerCase().replace(/[^a-z0-9]/g, '+'); /* this replaces spaces and punctuation for search query */ 
    const imageUrl = `https://placeholders.io/200/133/${imagePrompt}`; /* adjusted size for faster loading and imputs title to obtain query  */

    return `
        <article class="movie-card" data-id="${movie.id}" data-title="${movie.title}" data-director="${movie.director}" data-year="${movie.year}">
            <div class="movie-card__header">
                <h2 class="movie-card__title">${movie.title}</h2>
            </div>
            
            <img class="movie-card__image" src="${imageUrl}" alt="Poster for ${movie.title}">
            
            <div class="movie-card__fields">
                <p class="movie-card__detail"><strong>Director:</strong> ${movie.director}</p>
                <p class="movie-card__detail"><strong>Year:</strong> ${movie.year}</p>
                <p class="movie-card__detail"><strong>Genre:</strong> ${movie.genre}</p>
            </div>
        </article>
    `;
};


/**
 * 3. RENDER FUNCTION
 */
const renderCards = (data) => {
    const cardsHTML = data.map(movie => createCardHTML(movie)).join('');
    cardDisplay.innerHTML = cardsHTML;
};


/**
 * 4. LOGIC: Handles the logic for sorting the cards.
 */
const handleSort = (event) => {
    event.preventDefault(); 
    
    const sortField = document.getElementById('sort-field').value;

    if (!sortField) {
        return renderCards(fantasyMovies); 
    }

    const sortedData = [...fantasyMovies].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (typeof aValue === 'string') {
            return aValue.localeCompare(bValue);
        }
        
        if (typeof aValue === 'number') {
            return aValue - bValue;
        }

        return 0; 
    });
    
    renderCards(sortedData);
};


/**
 * 5. EVENT LISTENERS
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // A. Sort Form Listener
    sortForm.addEventListener('submit', handleSort);

    // B. Card Removal Listener
    cardDisplay.addEventListener('click', (event) => {
        const header = event.target.closest('.movie-card__header');
        if (header) {
            const card = header.closest('.movie-card');
            if (card) {
                card.remove(); 
                console.log(`Removed card: ${card.dataset.title}`);
            }
        }
    });

    /**
     * 6. INITIALIZATION: Start the card show!
     */
    renderCards(fantasyMovies);
});