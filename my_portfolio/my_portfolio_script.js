function sendInfo() {

    var params = {
        name: document.getElementById("txt1").value,
        email: document.getElementById("em1").value,
        message: document.getElementById("tta").value,
        phone: document.getElementById("ph1").value
    };

    const serviceID = "service_foogvju";
    const templateID = "template_2jgct1v";

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("txt1").value = "",
        document.getElementById("em1").value = "",
        document.getElementById("tta").value = "",
        document.getElementById("ph1").value = "",
        document.getElementById('phone-err').innerHTML = '';
        document.getElementById('area-err').innerHTML = '';
        document.getElementById('text-err').innerHTML = '';
        document.getElementById('email-err').innerHTML = '';
        console.log(res);
        alert("Message sent successfully!");
    })
    .catch((err) => console.log(err));
}

function setPadding(spanID, inputID) {
    var width = document.getElementById(spanID).clientWidth + 15;
    document.getElementById(inputID).style.paddingRight = width + 'px';
}

function nameValidation() {
    
    var name = document.getElementById('txt1').value;

    if(name.length == 0) {
        document.getElementById('text-err').innerHTML = 'Name is required';
        setPadding('text-err', 'txt1');
        return false;
    }
    if(!name.match(/^[A-Za-z\s]*$/)) {
        document.getElementById('text-err').innerHTML = 'Enter a correct name';
        setPadding('text-err', 'txt1');
        return false;
    }
    
    document.getElementById('text-err').innerHTML = '<i class="far fa-check-circle"></i>';
    setPadding('text-err', 'txt1');
    return true;
}

function emailValidation() {

    var name = document.getElementById('em1').value;

    if(name.length == 0) {
        document.getElementById('email-err').innerHTML = 'Email is required';
        setPadding('email-err', 'em1');
        return false;
    }
    if(!name.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
        document.getElementById('email-err').innerHTML = 'Enter a correct email';
        setPadding('email-err', 'em1');
        return false;
    }
    
    document.getElementById('email-err').innerHTML = '<i class="far fa-check-circle"></i>';
    setPadding('email-err', 'em1');
    return true;
}

function phoneValidation() {
    var name = document.getElementById('ph1').value;

    if(name.length == 0) {
        document.getElementById('phone-err').innerHTML = 'Phone is required';
        setPadding('phone-err', 'ph1');
        return false;
    }
    if(!name.match(/^[0-9]+$/)) {
        document.getElementById('phone-err').innerHTML = 'Enter a correct phone number';
        setPadding('phone-err', 'ph1');
        return false;
    }
    if(name.length != 10) {
        document.getElementById('phone-err').innerHTML = 'Phone number should be 10 digits';
        setPadding('phone-err', 'ph1');
        return false;
    }
    
    document.getElementById('phone-err').innerHTML = '<i class="far fa-check-circle"></i>';
    setPadding('phone-err', 'ph1');
    return true;
}

function messageValidation() {
    var name = document.getElementById('tta').value;
    var required = 20;

    if(name.length == 0) {
        document.getElementById('area-err').innerHTML = 'Message is required';
        setPadding('area-err', 'tta');
        return false;
    }
    if(name.length < required) {
        document.getElementById('area-err').innerHTML = (required - name.length) + ' more characters required';
        setPadding('area-err', 'tta');
        return false;
    }

    document.getElementById('area-err').innerHTML = '<i class="far fa-check-circle"></i>';
    setPadding('area-err', 'tta');
    return true;
}

function validateForm() {
    if(nameValidation() && emailValidation() && phoneValidation() && messageValidation()) {
        sendInfo();
    }
}



