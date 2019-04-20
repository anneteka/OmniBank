var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "omnibank"
});

function connect() {
    try {
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }
    catch (e) {

    }
}

function addUser(loginQ, eamilQ, passwordQ, nameQ, middleNameQ, surnameQ, birthQ, sexQ, countryQ) {
    var sql = "INSERT INTO user (login, email, password, name, middle_name, surname, birth,sex,country) VALUES ("
        + "\'" + loginQ + "\', \'" + passwordQ + "\', \'"
        + nameQ + "\', \'" + surnameQ + "\',\'"
        + birthQ + "\',\'" + sexQ + "\',\'" + countryQ + ")\'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
//throws ER_DUP_ENTRY error if this login is already in the table
}

function getUserID(login) {
    con.query("SELECT id FROM user WHERE login = " + "\'" + login + "\'", function (err, result) {
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
        + dateExpiryQ + "\'," + numberQ + "," + idQ + ")";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

}
