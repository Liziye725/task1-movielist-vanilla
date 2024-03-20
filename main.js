document.addEventListener('DOMContentLoaded', function() {
  let movies = [
    {
      name: "Inception",
      genre: "Science Fiction",
      releaseYear: 2010,
      director: "Christopher Nolan",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
    },
    // Feel free to add more predefined movies here
  ];

  // This enhanced version of displayMovies now also handles genre filtering
  function displayMovies(filterGenre = '') {
    const moviesList = document.getElementById('moviesList');
    moviesList.innerHTML = ''; // Clear the movies list
    movies.filter(movie => !filterGenre || movie.genre === filterGenre).forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `
        <h3>${movie.name} (${movie.releaseYear})</h3>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p>${movie.description}</p>
      `;
      moviesList.appendChild(movieElement);
    });
  }

  // Initially display all movies
  displayMovies();

  document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    
    // Get form values
    const name = document.getElementById('name').value;
    const genre = document.getElementById('genre').value;
    const releaseYear = parseInt(document.getElementById('releaseYear').value, 10);
    const director = document.getElementById('director').value;
    const description = document.getElementById('description').value;
    
    // Create a new movie object
    const newMovie = { name, genre, releaseYear, director, description };
    
    // Add the new movie to the movies array
    movies.push(newMovie);
    
    // Reset the form
    event.target.reset();
    
    // Display all movies again, including the new one
    displayMovies();
  });

  document.getElementById('sortButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    movies.sort((a, b) => a.releaseYear - b.releaseYear); // Ascending sort
    displayMovies(); // Update display
  });

  document.getElementById('genreFilter').addEventListener('change', function(event) {
    displayMovies(event.target.value); // Filter movies based on the selected genre
  });
});
