const questions= ["Не можете знайти відповідь? "+"<br>"+" Зв'яжіться з нами!","Як додати документ?","Як видалити/змінити документ?",
    "Я зможу користувати документами офлайн?","Мінімальний розмір зображення",
     "Як видалити акаунт?","мій e-mail вже зареєстровано в системі","Не можу завантажити документ, бо він вже є в системі"];
const answers = ['Напишіть нам','Натискаєте на кнопку "додати документ" на верхній панелі, завантажуєте фото, підтверджуєте його та обираєте категорію'
,'Заходите на сторінку документу, там є внопка "видалити документ". Щоб змінити документ, потрібно видалити його і завантажити новий',
'Ні, банк документів доступний тільки в онлайн-режимі','Мінімальний розмір зображення 1Мп, важливо, щоб зораження не було розмитим і текст був чітким',
'Натискаєте на своє фото у верхньому меню, щоб зайти у налаштування профілю і шукаєте внизу кнопку видалення',
'Спробуйте ввести іншу пошту, інакше напишіть нам!','Все добре, ваш документ додався, просто зміни ще не відобразилися для вас.Спробуйте перезавантажити додаток, вийти і знову зайти.'];


function fill_questions(){
    for(let i=0;i<questions.length;i++){

        if(i==0)
            $("#thread_1").append("<div class='question_board'><p class='question_style'>"+questions[i]+"</p><hr><textarea class='form-control' rows='3' name='client_question'></textarea><button class='btn btn-outline-light ' id='send_mess_button'>Відправити повідомлення</button></div>");
        if(i%3===0&&i!=0){
            $("#thread_1").append("<div class='question_board'><p class='question_style'>"+questions[i]+"</p><hr><p class='answer_style'>"+answers[i]+"</p></div>");
        }
        if(i%3===1){
            $("#thread_2").append("<div class='question_board'><p class='question_style'>"+questions[i]+"</p><hr><p class='answer_style'>"+answers[i]+"</p></div>");
        }
        if(i%3===2){
            $("#thread_3").append("<div class='question_board'><p class='question_style'>"+questions[i]+"</p><hr><p class='answer_style'>"+answers[i]+"</p></div>");
        }

    }
}
fill_questions();

