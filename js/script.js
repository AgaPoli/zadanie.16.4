'use strict';
(function() { /*Utwórz zmienną url, która będzie zawierała pełny adres do naszego dowcipu: */
	var url = 'http://api.icndb.com/jokes/random';
	var button = document.getElementById('get-joke');
	/*przycisk na stronie i podpiąć nasłuchiwanie na kliknięcie tak,
	    aby każdorazowo pobierał nam się losowy żart.  */
	button.addEventListener('click', function() {
		getJoke();
	});
	/*Do zmiennej paragraph przypiszemy element DOM paragrafu,
	który odpowiada za wyświetlanie dowcipu. */
	var paragraph = document.getElementById('joke');

	function getJoke() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.addEventListener('load', function() {
			var response = JSON.parse(xhr.response);
			paragraph.innerHTML = response.value.joke;
		});
		xhr.send();
		/*Najpierw tworzymy nową instancję obiektu XMLHttpRequest, potem otwieramy połączenie z wybranym adresem.
		   Do połączenia należy podpiąć nasłuchiwanie na odpowiedź z serwera. W callbacku tworzymy zmienną response i przypisujemy do niej tę dziwną linijkę:
		   var response = JSON.parse(xhr.response); */
	}
	getJoke();
})();
/*JSON to akronim od JavaScript Object Notation. Jest jednym z formatów służących do wymiany danych. Jego składnia jest bardzo podobna do obiektu JavaScript z tą różnicą, 
że w formacie JSON klucz również musi być w postaci stringa. */