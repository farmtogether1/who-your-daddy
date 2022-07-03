function ajaxObj(meth, url) {
  var x = new XMLHttpRequest();
  x.open(meth, url, true);
  x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  return x;
}
function ajaxReturn(x) {
  if (x.readyState === 4 && x.status === 200) {
    return true;
  }
}
function ___(x) {
  return document.getElementById(x);
}
function restrict(elem) {
  var tf = ___(elem);
  var rx = new RegExp();
  if (tf.type === "email") {
    rx = /[^a-zA-Z0-9.@]/gi;
  } else if (tf.type === "text") {
    rx = /[^a-z0-9 ]/gi;
  }
  if (
    elem === "phone" ||
    elem === "acct_num" ||
    elem === "amount" ||
    elem === "with_amount"
  ) {
    rx = /[^+,0-9. ()]/gi;
  }
  tf.value = tf.value.replace(rx, "");
}
function emptyElement(x) {
  ___(x).innerHTML = "";
}
function open_page() {
  var elem = ___("loader");
  elem.style.display = "none";
}
function ShowPassform(x) {
  var elem = ___(x);
  if (elem.style.display == "block") {
    elem.style.display = "none";
    ___("sign-up").style.display = "none";
    ___("sign-in").style.display = "block";
  } else {
    elem.style.display = "block";
    ___("sign-in").style.display = "none";
    ___("sign-up").style.display = "none";
  }
}
function call_timers() {
  timer2("airdrop_banner", "Jan 18, 2022 00:00:00");
  timer("airdrop", "Jan 18, 2022 00:00:00");
  timer("presale1", "Feb 1, 2022 14:00:00");
  timer("prisale", "Jan 20, 2022 13:00:00");
  timer("prisale1", "Jan 20, 2022 13:00:00");
  timer("presale", "Jan 28, 2022 14:00:00");
  timer("sale", "Feb 1, 2022 14:00:00");
}
function timer(xx, y) {
  // Set the date we're counting down to
  var countDownDate = new Date(y).getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById(xx).innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(xx).innerHTML = "EXPIRED";
    }
  }, 1000);
}
function timer2(xx, y) {
  // Set the date we're counting down to
  var countDownDate = new Date(y).getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById(xx).innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(xx).innerHTML = "EXPIRED";
    }
  }, 1000);
}

function ShowLogin() {
  window.location = "?sign-in";
}
function send_contact() {
  var form_name = ___("form_name").value;
  var form_email = ___("form_email").value;
  var form_message = ___("form_message").value;
  var contact_status = ___("contact_status");
  var btn = ___("contact_btn");
  if ("" == form_name || "" == form_email || "" == form_message) {
    contact_status.innerHTML =
      "<strong style='color: red'><i class='fa fa-warning'></i>&nbsp; fill all fields !!!</strong>";
  } else {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
    var ajax = ajaxObj("POST", "controller/post.php?contact_page_form");
    ajax.onreadystatechange = function () {
      if (ajaxReturn(ajax) === true) {
        if (ajax.responseText == 1) {
          contact_status.innerHTML =
            "<strong style='color: green'><i class='fa fa-check-square'></i>&nbsp;  Sent successfuly</strong>";
          setTimeout(function () {
            contact_status.innerHTML = "";
          }, 10000);
        } else if (ajax.responseText == 2) {
          contact_status.innerHTML =
            "<strong style='color: red'><i class='fa fa-warning'></i>&nbsp; fill all fields !!!</strong>";
        } else {
          contact_status.innerHTML = ajax.responseText;
        }
        btn.disabled = false;
        btn.innerHTML = "Submit";
      }
    };
    ajax.send(
      "form_name=" +
        form_name +
        "&form_email=" +
        form_email +
        "&form_message=" +
        form_message
    );
  }
}
/////////////////////////////////
////// Newsletter script
function subscribe() {
  var sub_email = ___("sub_email").value;
  var contact_status = ___("letterstatus");
  var btn = ___("sub_btn");
  if ("" == sub_email) {
    contact_status.innerHTML =
      "<strong style='color: red'><i class='fa fa-warning'></i>&nbsp; fill all fields !!!</strong>";
  } else {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
    var ajax = ajaxObj("POST", "controller/post.php?subscribe");
    ajax.onreadystatechange = function () {
      if (ajaxReturn(ajax) === true) {
        if (ajax.responseText == 1) {
          contact_status.innerHTML =
            "<strong style='color: green'><i class='fa fa-check-square'></i>&nbsp; Newsletter successfully subscribed</strong>";
          setTimeout(function () {
            contact_status.innerHTML = "";
          }, 10000);
        } else if (ajax.responseText == 2) {
          contact_status.innerHTML =
            "<strong style='color: red'><i class='fa fa-warning'></i>&nbsp; fill all fields !!!</strong>";
        } else if (ajax.responseText == 3) {
          contact_status.innerHTML =
            "<strong style='color: red'><i class='fa fa-warning'></i>&nbsp; Enter a valid  email !!!</strong>";
        } else {
          contact_status.innerHTML = ajax.responseText;
        }
        btn.disabled = false;
        btn.innerHTML = "Subscribe";
      }
    };
    ajax.send("sub_email=" + sub_email);
  }
}
function add_wallet() {
  var name = ___("wal_name").value;
  var add = ___("wallet_address").value;
  var btn = ___("add_wallet_btn");
  if ("" == name || "" == add) {
    return false;
  }
  btn.disabled = true;
  btn.textContent = "processing...";
  var ajax = ajaxObj("POST", "index.php?add_w");
  ajax.onreadystatechange = function () {
    if (ajaxReturn(ajax) === true) {
      if (ajax.responseText === "success") {
        window.location = "?add-wallet";
      } else {
        alert(ajax.responseText);
        btn.disabled = false;
        btn.textContent = "Add wallet";
      }
    }
  };
  ajax.send("w_name=" + name + "&w_add=" + add);
}

function remove_wallet(x, y) {
  var btn = ___(y + "_btn");
  btn.disabled = true;
  btn.textContent = "processing...";
  var ajax = ajaxObj("POST", "index.php?remove_w");
  ajax.onreadystatechange = function () {
    if (ajaxReturn(ajax) === true) {
      if (ajax.responseText === "success") {
        window.location = "?remove-wallet";
      } else {
        alert(ajax.responseText);
        btn.disabled = false;
        btn.textContent = "Remove wallet";
      }
    }
  };
  ajax.send("w_add=" + x + "&w_id=" + y);
}
function check(x) {
  var ajax = ajaxObj("POST", "../controller/post.php");
  ajax.onreadystatechange = function () {
    if (ajaxReturn(ajax) === true) {
      if (ajax.responseText === "success") {
        ___("withdraw_btn").disabled = false;
        ___("amount").disabled = false;
      } else if (ajax.responseText == "0") {
        ___("withdraw_btn").disabled = true;
        ___("amount").disabled = true;
      } else {
        alert(ajax.responseText);
        ___("withdraw_btn").disabled = true;
        ___("amount").disabled = true;
      }
    }
  };
  ajax.send("from=" + x + "&function=check_balance");
}
function check_btn(x) {
  var terms = ___(x);
  if (terms.checked === false) {
    ___("btn-register").disabled = true;
  } else {
    ___("btn-register").disabled = false;
  }
}
function check_coin(x) {
  if ("Alt_Coin" == x) {
    ___("alt_coin").style.display = "block";
    ___("coinname").style.display = "block";
    ___("coinname").required = true;
  } else {
    ___("alt_coin").style.display = "none";
    ___("coinname").style.display = "none";
    ___("coinname").required = false;
  }
}
