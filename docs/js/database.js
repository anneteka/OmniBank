var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "omnibank"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

function addUser(loginQ, eamilQ, passwordQ, nameQ, middleNameQ, surnameQ, birthQ, sexQ, countryQ) {
    var sql = "INSERT INTO user (login, email, password, name, middle_name, surname, birth,sex,country) VALUES ("
        + "\'" + loginQ + "\', \'" + passwordQ + "\', \'"
        + nameQ + "\', \'" + surnameQ + "\',\'"
        + birthQ + "\',\'" + home_cityQ + "\'," + sexQ + ")";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
//throws ER_DUP_ENTRY error if this login is already in the table
}

function getUserID(login){
    con.query("SELECT id FROM user WHERE login = "+"\'"+login+"\'", function (err, result) {
        if (err) throw err;
        console.log(result);
        return result;
    });
}
//todo
function addPassport(login, nameQ, middleNameQ, surnameQ, birthQ, sexQ, countryQ, dateExpiryQ, numberQ) {
    var idQ = getUserID(login);
    var sql = "INSERT INTO passport (name, middle_name, surname, birth,  sex, country, expiry, number, userID) VALUES ("
        + "\'" + nameQ + "\', \'" + middleNameQ + "\', \'" + surnameQ + "\', \'"
        + birthQ + "\', " + sexQ + ", \'" + countryQ + "\',\'"
        + dateExpiryQ + "\'," + numberQ+ "," +idQ + ")";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

}

addUser("hello", "hello", "anya", "kesa", "1999-11-12", "kiev", 1);