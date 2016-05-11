(function() {

  // OLD VERSION
  //---------------------------------------------------
  // var form = document.forms[0];
  // var output = document.getElementById('output');
  // var totalPrice = 0;
  //
  // // for Radio Button
  // //------------------------------------------------
  // for(var i = 0; i < form.elements.length; i++) {
  //
  //   var input = form.elements[i];
  //
  //   if(input.type == 'radio') {
  //
  //     input.onclick = function() {
  //       var pricePizza = parseInt(this.dataset.pizzaPrice);
  //
  //       if(this.checked == false) {
  //         totalPrice -= pricePizza;
  //         output.innerHTML = totalPrice;
  //       } else {
  //         totalPrice = 0;
  //         totalPrice += pricePizza;
  //         output.innerHTML = totalPrice;
  //       }
  //     }
  //   }
  //
  //   if(input.type == 'checkbox') {
  //
  //     input.onclick = function() {
  //       var priceIngr = parseFloat(this.dataset.pizzaIngr);
  //
  //       if(this.checked == true) {
  //         totalPrice += priceIngr;
  //         output.innerHTML = totalPrice;
  //       } else {
  //         totalPrice -= priceIngr;
  //         output.innerHTML = totalPrice;
  //       }
  //
  //     }
  //   }
  //
  //   if(input.type == 'text') {
  //
  //   }
  //
  //
  // } // end

  var form = document.pizza;
  var elem;

  for(var i = 0; i < pizza.elements.length; i++) {
    elem = pizza.elements[i];

    if(elem.type == 'text' || elem.type == 'tel') {
      elem.onchange = function(e) {
        if(this.pattern) {
          if(new RegExp(this.pattern).test(this.value)) {
            this.style.border = '1px solid lightgreen';
          } else {
            this.style.border = '1px solid pink';
          }
        }

      }
    }
  }


  var price = 0;
  var total = document.getElementById('total');

  for(var j = 0; j < pizza.elements.length; j++) {
    elem = pizza.elements[j];

    if(elem.name === 'pizza' || elem.name === 'ingr') {
      elem.onchange = function() {

        // Pizza size
        //------------------------------------
        if(this.value == 'small') {
          price = 50;
        }
        else if(this.value == 'normal') {
          price = 75;
        }
        else if(this.value == 'big') {
          price = 100;
        }

        // Pizza ingredients
        //-------------------------------------
        else if(this.value == 'mashrooms') {
          if(this.checked == false) price -= 3.50;
          else price += 3.50;
        }
        else if(this.value == 'bekon') {
          if(this.checked == false) price -= 10;
          else price += 10;
        }
        else if(this.value == 'tomato') {
          if(this.checked == false) price -= 7.50;
          else price += 7.50;
        }
        else if(this.value == 'cheese') {
          if(this.checked == false) price -= 15;
          else price += 15;
        }
        else if(this.value == 'olive') {
          if(this.checked == false) price -= 5;
          else price += 5;
        }

        // Output total price
        //----------------------------------------
        total.innerHTML = price + 'грн';

      }
    }

  }


})();
