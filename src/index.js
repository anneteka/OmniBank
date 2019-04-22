import tesseract from "tesseract.js";
//import {addPic,addUser,addPassport} from 'database'
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

var img = document.createElement("img");

$("#imgInp").change(function(e) {
    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        var reader = new FileReader();
        reader.onloadend = function() {
            if (reader.result) {
                img.src = reader.result;
                console.log(reader);
                addImg(reader.result);
            }
        };
        reader.readAsDataURL(file);
        $("#imgp").append(img);
    }
});

let unsorted=["../images/icon.png"];
//add url of img to array/database
function addImg(filesrc){
    unsorted.push(filesrc);
    console.log(filesrc);
    tesseract.recognize(filesrc,{lang:'eng'})
        .then(function(result){
            console.log(result)
        });
}
// $(document).on('click', '#done_button', function () {
//     let login = sessionStorage.getItem('login');
//     let nameOfPic= $('.name').value;
//     let
//     addPic(login);
// });
const check_failure_reasons=[
    'Не завантажено зображення!','Некоректне зображення! Спробуйте ще раз!','Неправильний пароль!'
];

