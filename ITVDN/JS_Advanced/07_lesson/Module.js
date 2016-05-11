// I don't know why I called this module Frog :)
//-----------------------------------------------------

// It's not work

// var Frog = {};
//
// Frog.formWatermark = function() {
//   var inputs = document.getElementsByTagName('input');
//
//   for(var i = 0; i < inputs.length; i++) {
//     var input = inputs[i];
//
//     if(input.name == undefined) {
//       continue;
//     }
//     // if(!input.dataset.watermark) {
//     //   continue;
//     // }
//
//
//     var watermark = input.dataset.watermark;
//
//     inputWatermark(input);
//
//     input.onfocus = function() {
//       if(this.value == watermark) {
//         this.value = '';
//         this.style.color = 'black';
//         this.style.fontStyle = 'normal';
//       }
//     }
//
//     input.onblur = function() {
//       if(this.value == '') {
//         inputWatermark(this);
//       }
//     }
//   }
//
//   function inputWatermark(input) {
//     input.value = watermark;
//     input.style.color = 'grey';
//     input.style.fontStyle = 'italic';
//   }
// }


var Module = {};

Module.watermark = function(elem) {

  var watermarkText = elem.dataset.watermark;

  inputWatermark();

  elem.addEventListener('focus', function(){
    if(this.value == watermarkText) {
      this.value = '';
      this.style.color = 'black';
      this.style.fontStyle = 'normal';
    }
  }, false);

  elem.addEventListener('blur', function() {
    if(this.value == '') {
      inputWatermark();
    }
  }, false)


  function inputWatermark() {
    elem.value = watermarkText;
    elem.style.color = 'grey';
    elem.style.fontStyle = 'italic';
  }

}
