const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
var mysql = require('mysql');
const bodyParser = require('body-parser');
// for reading JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
    var string;
    getResult(function(err, result) {
        if (err) {console.log("Database error!"); throw err;
        } else {
            string = JSON.stringify(result);
            res.send(string);
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

/** Adds a restaurant to favorites
 * Gets all data required from the client and puts it to database.*/
app.post('/favoritesAdd', function (req, res)  {
    var sql = "INSERT INTO restaurants(id, name, street, postcode, city)"
        + " values(?,?,?,?,?)";
    con.query(sql, [req.body.id, req.body.name, req.body.street, req.body.postcode, req.body.city],function (err, result) {
        if (err) throw err;
    });
    res.json("");
});

/**Deletes favorite restaurant by ID */
app.delete('/favorites/:id', function (req, result){
    var sql = "DELETE FROM restaurants WHERE id = ?";
    con.query(sql, [req.params.id], function (err, res) {
        if (err) throw err;
        console.log("Record has been deleted successfully!");
    });
    result.status(204).end();
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});