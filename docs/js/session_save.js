

$(document).on('click', '.done-button', function () {
    let login = document.getElementById("login").value;
    sessionStorage.setItem('login',login);
});