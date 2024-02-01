const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const heartButton = document.getElementById('heartButton');

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  console.log('Searching for:', searchTerm);
  // Implement your search logic here
});

heartButton.addEventListener('click', function() {
  this.classList.toggle('liked');
});
