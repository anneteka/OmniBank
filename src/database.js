var mysql = require('mysql');

var con;

function connect() {
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "omnibank"
    });
    try {
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }
    catch (e) {

    }
}

function addUser(loginQ, emailQ, passwordQ, nameQ, middleNameQ, surnameQ, birthQ, sexQ, countryQ) {
    var sql = "INSERT INTO user (login, email, password, name, middle_name, surname, birth,sex,country) VALUES ("
        + "\'" + loginQ + "\', \'" + passwordQ + "\', \'"
        + nameQ + "\', \'" + surnameQ + "\',\'"
        + birthQ + "\',\'" + sexQ + "\',\'" + countryQ + ")\'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        result("inserted");
        console.log("1 record inserted");
    });
//throws ER_DUP_ENTRY error if this login is already in the table
}

function getUserID(login, callback) {
    con.query("SELECT id FROM user WHERE login = " + "\'" + login + "\'", function (err, result) {
        if (err) throw err;
        console.log(result[0].id);
        callback(result[0].id);
        return;
    });
}

//todo
function addPassport(login, nameQ, middleNameQ, surnameQ, birthQ, sexQ, countryQ, dateExpiryQ, numberQ) {
    var idQ = getUserID(login);
    var sql = "INSERT INTO passport (name, middle_name, surname, birth,  sex, country, expiry, number, userID) VALUES ("
        + "\'" + nameQ + "\', \'" + middleNameQ + "\', \'" + surnameQ + "\', \'"
        + birthQ + "\', \'" + sexQ + "\', \'" + countryQ + "\',\'"
        + dateExpiryQ + "\'," + numberQ + "," + idQ + ")";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

}



function addPic(loginQ, pathQ, typeQ, nameQ) {
   getUserID(loginQ, function(err, data){
       con.query("INSERT INTO docpics (userid, path, type, name) VALUES ("
           + "\'" + data + "\', \'" + pathQ + "\', \'" + typeQ + "\', \'"
           + nameQ + "\')",
           function (err, data) {
           if (err) throw err;
           console.log("pic inserted");
       })
   });
}

function getUserLogin(loginQ, passwordQ, callback) {
    con.query("SELECT * FROM user WHERE login = " + "\'" + loginQ + "\'", function (err, result) {
        if (err) {
            throw err;
        }
        if (result.length == 0) {
            callback("no_login");
            return;
        }
        if (result[0].password != passwordQ) {
            callback("false");
            return;
        }
        callback("true");
        return;
    });
}
connect();
//example
//data - no_login, true, false
//no login if user is not present in the db
//false if password is incorrect
//true if evrth ok
getUserLogin("hey", "me", function (data) {
    //if (err) throw err;
    console.log(data);
});

module.exports = [addPic, addUser, addPassport];