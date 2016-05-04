(function() {

  var body = document.body;
  var button = document.getElementById('bt');
  var count = 0;

  button.onclick = function() {

    if(count == 10) {
      removeAllParagraph();
      return;
    }

    var p = document.createElement('p');
    p.innerHTML = 'simple text';
    p.style.backgroundColor = 'pink';

    body.appendChild(p);
    count++;
  }


  // Remove all Paragraph
  //-----------------------------------------------
  function removeAllParagraph() {
    var allP = document.getElementsByTagName('p');

    while(allP.length) {
      body.removeChild(allP[0]);
    }

    count = 0;
  }




})();
