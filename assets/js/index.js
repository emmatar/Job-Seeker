document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const heartButton = document.getElementById('heartButton');
  const historyList = document.getElementById('historyList');

  searchButton.addEventListener('click', function () {
    console.log('Search button clicked!');
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
      // Save search term to local storage
      saveToLocalStorage(searchTerm);

      // Redirect to jobpage.html
      window.location.href = 'jobpage.html';
    }
  });

  heartButton.addEventListener('click', function () {
    // Redirect to saved.html
    window.location.href = 'saved.html';
  });

  function saveToLocalStorage(term) {
    const history = getSearchHistory();
    history.push(term);
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }

  function getSearchHistory() {
    return JSON.parse(localStorage.getItem('searchHistory')) || [];
  }

  function displaySearchHistory() {
    historyList.innerHTML = '';
    const history = getSearchHistory();

    history.forEach(function (term) {
      const listItem = document.createElement('li');
      listItem.textContent = term;
      historyList.appendChild(listItem);
    });
  }
});
