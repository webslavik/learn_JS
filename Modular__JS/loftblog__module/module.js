var myModule = (function() {

	var init = function() {
		_setUpListener();

	};

	var _setUpListener = function() {
		// прослушка событий
		$('#add-new-item').on('click', _showModal); // открыть модальное окно
	};

	var _showModal = function(e) {
		e.preventDefault();
		console.log('вызов модального окна');

	};



	return {
		init: init
	}


})();

myModule.init();