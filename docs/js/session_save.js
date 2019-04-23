

$(document).on('click', '.done-button', function () {
    let login = document.getElementById("login").value;
    sessionStorage.setItem('login',login);
});

$("#identity").click(function(){
    window.location.href='identity.html'
});
$("#bank_cards").click(function(){
    window.location.href='bank_cards.html'
});
$("#certificate").click(function(){
    window.location.href='certificate.html'
});
$("#other").click(function(){
    window.location.href='other.html'
});
$("#tickets").click(function(){
    window.location.href='tickets.html'
});

