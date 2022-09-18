function demoDisplay() {

    var fName = document.myForm.frstName.value;
    var lName = document.myForm.lastName.value;
    var addRess = document.myForm.addRess.value;
    var pinCode = document.myForm.pinCode.value;
    var gender = document.myForm.genVal;
    var f1 = document.getElementById('food1');
    var f2 = document.getElementById('food2');
    var f3 = document.getElementById('food3');
    var f4 = document.getElementById('food4');
    var f5 = document.getElementById('food5');
    var states = document.getElementById('state');
    var countrys = document.getElementById('country');
    var p1 = document.getElementById('para1');
    var p2 = document.getElementById('para2');
    var p3 = document.getElementById('para3');
    var p4 = document.getElementById('para4');
    var p5 = document.getElementById('para5');
    var p6 = document.getElementById('para6');
    var p7 = document.getElementById('para7');


    if (fName == null || fName == "", lName == null || lName == "", addRess == null || addRess == "", pinCode == null || pinCode == "") {
        p1.style.display = "block"
        p2.style.display = "block"
        p3.style.display = "block"
        p4.style.display = "block"
        p5.style.display = "block"
        p6.style.display = "block"
        p7.style.display = "block"
        p1 = p1.value;
        p2 = p2.value;
        p3 = p3.value;
        p4 = p4.value;
        p5 = p5.value;
        p6 = p6.value;
        p7 = p7.value;
    } else {
        //document.getElementById("myP1").style.display = "none";
        document.getElementById("myP2").style.display = "block";
        document.getElementById('text').style.display = "block";

        frstRow.innerHTML = fName;
        secRow.innerHTML = lName;
        thirRow.innerHTML = addRess;
        fourRow.innerHTML = pinCode;
        fifRow.innerHTML = gender.value;

        if (f1.checked) {
            sixRow.innerHTML = f1.value;
        }
        if (f2.checked) {
            sixRow.innerHTML = f2.value;
        }
        if (f3.checked) {
            sixRow.innerHTML = f3.value;
        }
        if (f4.checked) {
            sixRow.innerHTML = f4.value;
        }
        if (f5.checked) {
            sixRow.innerHTML = f5.value;
        }

        sevenRow.innerHTML = states.value;
        eitRow.innerHTML = countrys.value;

        document.myForm.reset();
        p1.innerText = "";
        p2.innerText = "";
        p3.innerText = "";
        p4.innerText = "";
        p5.innerText = "";
        p6.innerText = "";
        p7.innerText = "";

    }
}