// Link posters to IMDB URL
const linkIMDB = (imdbID => {
    return "https://www.imdb.com/title/" + imdbID;
});

// Place movies with posters in DOM
const getMovielist = document.getElementById("movielist");
const addMoviesToDom = (movies => {
    movies.forEach(movie => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = linkIMDB(movie.imdbID);
        const img = document.createElement("img");
        img.src = movie.poster;
        a.appendChild(img);
        li.appendChild(a);
        getMovielist.appendChild(li)
    });
});
addMoviesToDom(movies);

// All radiobuttons filter movies
// 1. wordInMovie filter
const filterMovies = (wordInMovie => {
    const filteredWord = movies.filter(movie => {
        const titles = movie.title.toLowerCase();
        return titles.includes(wordInMovie);
    });
    //console.log(filteredWord);
    addMoviesToDom(filteredWord);
});

// 2. newest movies filter
const filterLatestMovies = () => {
    const filteredYear = movies.filter(movie => movie.year >= 2014).map(movie => movie);
    //console.log(filteredYear);
    addMoviesToDom(filteredYear);
};

// Remove all movies in the DOM
const removeAllMoviesInDom = () => {
    getMovielist.querySelectorAll('*').forEach(n => n.remove());
};

// Put change event on radiobuttons
const addEventListeners = () => {
    const getFilterButton = document.getElementsByName("film-filter");
    getFilterButton.forEach(button => {
        button.addEventListener("change", function handleOnChangeEvent(event) {
            //console.log(event.target.value);
            removeAllMoviesInDom();
            switch (event.target.value) {
                case "new-movies":
                    filterLatestMovies();
                    //console.log("hey i am a new movie");
                    break;
                case "avenger":
                    filterMovies("avenger");
                    //console.log("hey i am an Avenger film");
                    break;
                case "x-men":
                    filterMovies("x-men");
                    //console.log("hey i am a X-men film");
                    break;
                case "princess":
                    filterMovies("princess");
                    //console.log("hey i am a Princess film");
                    break;
                case "batman":
                    filterMovies("batman");
                    //console.log("hey i am a Batman film");
                    break;
            };
        });
    });
};
addEventListeners();

// Bonus: input searchfield with click/enter event
const addEventListenerSearchfield = () => {
    const searchText = document.getElementById("searchText");
    const searchButton = document.getElementById("searchButton");
    searchText.addEventListener("keypress", function handleOnEnterEvent(event) {
        removeAllMoviesInDom();
        if (event.key === "Enter") {
            filterMovies(searchText.value);
        };
    });
    searchButton.addEventListener("click", function handleOnClickEvent() {
        removeAllMoviesInDom();
        filterMovies(searchText.value);
    });
};
addEventListenerSearchfield();