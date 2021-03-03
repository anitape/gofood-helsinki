const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
var mysql = require('mysql');

/** Information required to MysQL connection.*/
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "gofood",
    multipleStatements: true
});

/** Connects to MySQL. */
con.connect(function(err){
    if(err) throw err;
    console.log('Connected to MySQL!');
});


/**Send all restaurants to the client in json format.*/
app.get('/favorites', function (req, res) {
    var alteredResult;
    var string;
    getResult(function(err, result) {
        if (err) {console.log("Database error!"); throw err;
        } else {
            string = JSON.stringify(result);
            alteredResult = '{"numOfRows":' +result.length+', "rows": '+string+'}';
            console.log("Altered result: " + alteredResult);
            res.send(alteredResult);
        }
    });
});

/**
 * function getResult
 * Send a request.
 * @param {getResult} callback - The callback that handles the response from database.
 * Selects all restaurants from database.
 * @returns callback{null, string}
 */
var getResult = function(callback) {
    var sql = "SELECT * from restaurants";
    con.query(sql, function (err, result) {
        if (err) return callback(err);
        console.log(result); // näkyykö selaimessa?
        return callback(null, result);
    });
};


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});