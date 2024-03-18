import { initNavbarAnimation,displayNav } from './navbar.js';
import { initMenu } from './menu.js';
import { initSearch } from './search.js';
import { fetchAndDisplayProducts } from './fetchData.js';
import { displayFav, addedToFavourite } from './favorites.js';



document.addEventListener('click', function(e) {
    if (e.target.classList.contains('addToFav')) {
        const id = e.target.dataset.id;
        addedToFavourite(id);
    }

});

const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        initSearch(searchInput.value);
        
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayNav();
    initNavbarAnimation();
    initMenu();
    fetchAndDisplayProducts();
    const favItems = document.getElementById('favItems');
    if (favItems) {
        displayFav();
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        initSearch(searchInput);
    }

});