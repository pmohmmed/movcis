const userName = document.getElementById('user');
const password = document.getElementById('pass');
const re_password = document.getElementById('re_pass');
const email = document.getElementById('mail');





form.addEventListener('submit', (e) => {

    e.preventDefault();
    if (checkValidation()) {
        console.log("success");
    }
})
function checkValidation() {
    //get the values
    const userNameValue = userName.value.trim();
    const passwordValue = password.value.trim();
    const re_passwordValue = re_password.value.trim();
    const emailValue = email.value.trim();
    let vailed = false;
    if (userNameValue === '') {
        Errorfun(userName, "Username can't be empty");
        vailed = false;
        userName.focus();
    } else if (localStorage.getItem(userNameValue)) {
        Errorfun(userName, "this username already taken")
        vailed = false;
        userName.focus();

    }
    else {
        successful(userName);
        vailed = true;
        if (emailValue === '') {
            Errorfun(email, "choose an email address!")
            vailed = false;
            email.focus();


        } else if (!isEmail(emailValue)) {
            Errorfun(email, "Invalid email")
            vailed = false;
            email.focus();


        } else if (localStorage.getItem(emailValue)) {
            Errorfun(email, "this email already taken")
            vailed = false;
            email.focus();

        }
        else {
            successful(email)
            vailed = true;

            if (passwordValue === '') {
                Errorfun(password, "password can't be empty")
                vailed = false;
                password.focus();


            }
            else if (passwordValue.length < 6) {
                Errorfun(password, "password must be at least 6 character")
                vailed = false;
                password.focus();


            }
            else {
                successful(password)
                vailed = true;
                if (re_passwordValue !== passwordValue) {
                    Errorfun(re_password, "Those passwords didn’t match. Try again.")
                    vailed = false;
                    re_password.focus();


                } else if (re_passwordValue === '') {
                    Errorfun(re_password, "password can't be empty")
                    vailed = false;
                    re_password.focus();



                }
                else {
                    successful(re_password)
                    vailed = true;

                }
            }

        }
    }



    if (vailed) {

        localStorage.setItem(userNameValue, passwordValue);
        localStorage.setItem(emailValue, passwordValue);
        window.location.href = "log_in2.html";
    }




};


function Errorfun(input, message) {
    const g_input = input.parentElement; //.g_input
    const small = g_input.querySelector('small');

    g_input.className = 'global g_input invalid';
    small.innerText = message;
    // input.setAttribute("autofocus");
}
function successful(input) {
    const g_input = input.parentElement;
    // const small = g_input.querySelector('small');
    g_input.className = 'global g_input vaild'
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}