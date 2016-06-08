
  var view = {

    // получает сообщение и выводит его в области сообщения
    displayMessage: function(msg) {
      var messageArea = document.getElementById('messageArea');
      messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
      var cell = document.getElementById(location);
      cell.setAttribute('class', 'hit');
    },

    displayMiss: function(location) {
      var cell = document.getElementById(location);
      cell.setAttribute('class', 'miss');
    }


  }

  view.displayMessage('Its work?');
  view.displayMiss('00');
  view.displayHit('34');
  view.displayMiss('55');
  view.displayHit('12');
  view.displayMiss('25');
  view.displayHit('26');
