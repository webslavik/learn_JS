var MyQuery = {};

MyQuery.FindClass = function(className) {

  var children = document.body.childNodes;
  var array = [];


  for(var i = 0; i < children.length; i++) {
    if(children[i].nodeType == 1) {

      var elemClassName = children[i].getAttribute('class');

      if(elemClassName === className) {
        array.push(children[i]);
      }

    }
  }

  return array;

}
