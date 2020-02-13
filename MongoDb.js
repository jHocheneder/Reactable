var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    var rdb = db.db("ReactableDB");
    /*rdb.createCollection("game", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });*/

    var p1 = {
        id: 0,
        vname: "Jakob",
        nname: "Hocheneder",
        email: "jakob.hocheneder@gmail.com",
        gebdat: '21.06.2002',
        username: "JaHo02"
    }

    rdb.collection("Player").insertOne(p1, function(){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});