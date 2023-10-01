const inputEmail = document.getElementById("email");
const btnSubmit = document.getElementById("btn_submit");

btnSubmit.addEventListener("click", (event) => {
    let email = inputEmail.value;
    let msgErro = document.querySelector("small")
    let validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    event.preventDefault();

    if (email === '') {
        msgErro.style.display = 'inline';
        msgErro.innerText = "Email cannot be empty";
        inputEmail.setAttribute("placeholder", " ");
        inputEmail.style.cssText =
            'border-color: rgb(255, 0, 0);' +
            'border-width: 1.5px;' +
            'background-Color: rgb(255, 216, 216);'
        ;
    } else if (!email.match(validateEmail)) {
        msgErro.style.display = 'inline';
        inputEmail.style.cssText = 
            'border-color: rgb(255, 0, 0);' +
            'border-width: 1.5px;' +
            'color: rgb(255, 0, 0);' +
            'background-Color: rgb(255, 216, 216);'
        ;
    } else {
        window.location.href = '/assets/html/thank.html'
    }
});

function backPage() {
    window.location.href = '/assets/html/index.html'
}