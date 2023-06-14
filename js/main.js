var check = document.querySelectorAll(".inputs");
var btns = document.getElementById("btn");

var pass = document.getElementById("pass");
var cpass = document.getElementById("cpass");


btns.addEventListener("click", function () {
    check.forEach(function (e) {
        var val = e.value;
        if (val == "") {
            e.parentNode.nextElementSibling.classList.add("view");
        }
        else {
            e.parentNode.nextElementSibling.classList.remove("view");
        }
    })

    var valueCpass = cpass.value;
    var valuePass = pass.value;
    var c = 0;
    var passArr = valuePass.split("");
    var len = passArr.length;


    passArr.forEach(function (arr) {
        console.log(arr);
        if (arr == " ") {
            c++;
        }
    })
    if (c >= 1) {
        pass.parentNode.nextElementSibling.nextElementSibling.classList.add("view");
    }
    else {
        pass.parentNode.nextElementSibling.nextElementSibling.classList.remove("view");
    }

    if (valueCpass !== valuePass) {
        cpass.parentNode.nextElementSibling.nextElementSibling.classList.add("view");
    }
    else {
        cpass.parentNode.nextElementSibling.nextElementSibling.classList.remove("view");
    }

    if (len < 8) {
        pass.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("view");
    }
    else {
        pass.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("view");
    }

})

