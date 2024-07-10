const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

document.getElementById("reg").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("reg-username").value;
    var email = document.getElementById("reg-email").value;
    var password = document.getElementById("reg-password").value;

    sessionStorage.setItem("username", username);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);

    alert("Registration Successful!                                                  Thank you for your Registration -Admin Sho"); 

});

document.getElementById("log").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    if  (sessionStorage.getItem("email") == email && sessionStorage.getItem("password") == password) {
        window.location = "indexxxx.html";
        alert("Login Successful!");
    } else {
        alert("Invalid email or password!");
    }
});