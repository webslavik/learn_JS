(function() {

  var form = document.forms[0];

  form.firstName.onchange = firstNameOnChange;
  form.lastName.onchange = lastNameOnChange;
  form.login.onchange = loginOnChange;
  form.password.onchange = passwordOnChange;
  form.checkPassword.onchange = checkPasswordOnChange;
  form.email.onchange = emailOnChange;
  form.onsubmit = onsubmitHandler;


  function firstNameOnChange() {
    validation(this);
  }
  function lastNameOnChange() {
    validation(this);
  }
  function loginOnChange() {
    validation(this);
  }
  function passwordOnChange() {
    validation(this);
  }
  function checkPasswordOnChange() {

    var pass = form.password.value;
    var msg = this.dataset.msg;
    var msgId = this.dataset.msgId;

    if(this.value != pass) {
      document.getElementById(msgId).innerHTML = msg;
      document.getElementById(msgId).style.color = 'red';
    } else {
      document.getElementById(msgId).innerHTML = '';
    }
  }

  function emailOnChange() {
    validation(this);
  }

  function validation(elem) {
    var pattern = elem.dataset.pattern;
    var msg = elem.dataset.msg;
    var msgId = elem.dataset.msgId;
    var res = elem.value.search(pattern);

    if(res == -1) {
      document.getElementById(msgId).innerHTML = msg;
      document.getElementById(msgId).style.color = 'red';
    } else {
      document.getElementById(msgId).innerHTML = '';
    }

  }

  function onsubmitHandler(e) {
    var invalid = false;

    for(var i = 0; i < this.elements.length; i++) {
      var elem = this.elements[i];

      if(elem.type == 'text' || elem.type == 'password') {
        if(elem.value.length == 0) invalid = true;
      }
    }

    if(invalid) {
      e.preventDefault();
      document.getElementById('output').style.visibility = 'visible';
    } else {
      document.getElementById('output').style.visibility = 'hidden';
    }

  }

})();
