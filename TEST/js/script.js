function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

function performSearch() {
  var searchTerm = document.querySelector('.search__input').textContent;
  var searchResults = document.getElementById('search__results');

  // Очищаем предыдущие результаты поиска
  searchResults.innerHTML = '';

  // Выполняем поиск на странице
  var elements = document.getElementsByTagName('*');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.innerText.includes(searchTerm)) {
      // Найден соответствующий элемент, добавляем его в результаты поиска
      var resultItem = document.createElement('p');
      resultItem.innerText = element.innerText;
      searchResults.appendChild(resultItem);
    }
  }
}

function checkInput() {
  var searchInput = document.querySelector('.search__input');
  var placeholderText = 'Введите текст';
  
  if (searchInput.textContent.trim() === '') {
    searchInput.textContent = '';
    searchInput.setAttribute('placeholder', placeholderText);
  } else {
    searchInput.removeAttribute('placeholder');
  }
}
