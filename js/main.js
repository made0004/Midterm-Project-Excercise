import { fantasyMovies } from "./data.js"; 

document.addEventListener('DOMContentLoaded', init);

let displayData = [];

const cardDisplay = document.getElementById('card-display');
const sortForm = document.getElementById('sort-form');
const selectElement = document.getElementById('sort-field');

function init() {
  displayData = [...fantasyMovies]; 
  
  if (displayData.length > 0) {
    displayFields(displayData[0]);
  }
  
  buildCards(displayData);
  
  addListeners();
}

function addListeners() {
  sortForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const field = selectElement.value;
    sortBy(field);
  });
  
  cardDisplay.addEventListener('click', (event) => {
    const cardToRemove = event.target.closest('.movie-card');
    
    if (cardToRemove) {
      const id = cardToRemove.dataset.id;
      removeCard(id);
    }
  });
}

function buildCards(arr) {
    const cardsHTML = arr.map(movie => {
        const imagePrompt = movie.title.toLowerCase().replace(/[^a-z0-9]/g, '+');
        const imageUrl = `https://placeholders.io/200/133/${imagePrompt}`;

        return `
            <article class="movie-card" data-id="${movie.id}" tabindex="0">
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
    }).join('');
    
    cardDisplay.innerHTML = cardsHTML;
}

function displayFields(obj) {
    const fields = Object.keys(obj);
    
    const htmlOptions = fields
        .filter(key => key !== 'id') 
        .map(key => `<option value="${key}">${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}</option>`)
        .join('');
    
    selectElement.innerHTML = `<option value="">Choose a field</option>${htmlOptions}`;
}

function removeCard(id) {
    const cardId = Number(id);
    
    displayData = displayData.filter(movie => movie.id !== cardId);
    
    buildCards(displayData);
}

function sortBy(field) {
  if (!field) {
    return; 
  }

  displayData.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (typeof aValue === 'string') {
        return aValue.localeCompare(bValue);
    }
    
    if (typeof aValue === 'number') {
        return aValue - bValue;
    }

    return 0; 
  });
  
  buildCards(displayData);
}