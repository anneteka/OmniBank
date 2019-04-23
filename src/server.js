import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$(document).on('click', '.done-button', function () {
    let login = document.getElementById("login").value;
    sessionStorage.setItem('login',login);
    jQuery.ajax(
        {
            url: 'https://localhost:5000/user',
            method: 'get',
            dataType: 'json',
            success: function (json) {

                json.forEach(user => {
                    if (user.login === login)
                        document.location.href = "cabinet.html";
                });
            },
            error: function (xhr) {
                alert("An error occured: " + xhr.status + " " + xhr.statusText);
            }
        });
});