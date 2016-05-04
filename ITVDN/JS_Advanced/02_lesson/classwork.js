(function() {

  var bt1 = document.getElementById('bt1');
  var bt2 = document.getElementById('bt2');
  var bt3 = document.getElementById('bt3');

  // Paragraph
  //------------------------------------------------
  bt1.onclick = function() {
    // resetBorder();
    var paragraphs = document.getElementsByTagName('p');

    for(var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.border = '2px solid red';
    }

  }

  // Paragraph
  //------------------------------------------------
  bt2.onclick = function() {
    // resetBorder();
    var links = document.getElementsByTagName('a');

    for(var i = 0; i < links.length; i++) {
      links[i].style.border = '5px solid yellow';
    }
  }

  // Div
  //------------------------------------------------
  bt3.onclick = function() {
    // resetBorder();
    var test_div = document.getElementById('test_div');
    test_div.style.border = '2px solid purple';
  }


  // This function doesn't work
  //-----------------------------------------------
  // function resetBorder() {
  //   var children = document.body.childNodes;
  //
  //   for(var i = 0; i < children.length; i++) {
  //     if(children[i] == 1) {
  //       children[i].style.border = 'none';
  //     }
  //   }

  // }

})();
