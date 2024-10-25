const express = require("express");
const app = express();
const cors = require("cors");

//POSTできたりするように（おまじない）
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//sqlite3関連設定
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./main.db", (err) => {
    if (err) {
        console.error("database error: " + err.message);
    } else {
        db.serialize(() => {
            //都度table削除（あれば）
            db.run("drop table if exists lists");
            //table生成（無ければ）
            db.run("create table if not exists lists( \
                id integer primary key autoincrement, \
                name text, \
                longitude integer, \
                latitude integer, \
                altitude integer \
            )", (err) => {
                if (err) {
                    console.error("table error: " + err.message);
                } else {
                    //初期データinsert
                    db.run("insert into lists(name,longitude,latitude,altitude) values('Hiroshimaa',133.4553 ,34.3853, 50)");
                    db.run("insert into lists(name,longitude,latitude,altitude) values('Hiroshimab',134.4553 ,35.3853, 50)");
                    db.run("insert into lists(name,longitude,latitude,altitude) values('Hiroshimac',133.4553 ,36.3853 , 50)");
                }
            });
        });
    }
});

//リッスン開始
app.listen(3001, () => {
    console.log("Start server on port 3001.");
});

app.get("/", (req, res) => {
    res.send("welcome");
});

//create
app.post("/lists", (req, res) => {
    const reqBody = req.body;
    const stmt = db.prepare("insert into lists(name,longitude,latitude,altitude) values(?,?,?,?)"); //lastID取得のため
    stmt.run(reqBody.name, reqBody.longitude, reqBody.latitude, reqBody.altitude, (err, result) => { //lambda式を使うとthis.lastIDでは取得できない
        if (err) {
            res.status(400).json({
                "status": "error",
                "message": err.message
            });
            return;
        } else {
            res.status(201).json({
                "status": "OK",
                "lastID": stmt.lastID
            });
        }
    });
});

//get lists
app.get("/lists", (req, res) => {
    db.all("select * from lists", [], (err, rows) => {
        if (err) {
            res.status(400).json({
                "status": "error",
                "message": err.message
            });
            return;
        } else {
            res.status(200).json({
                "status": "OK",
                "lists": rows
            });
        }
    });
});

//get member
app.get("/lists/:id", (req, res) => {
    const id = req.params.id;
    db.get("select * from lists where id = ?", id, (err, row) => {
        if (err) {
            res.status(400).json({
                "status": "error",
                "message": err.message
            });
            return;
        } else {
            res.status(200).json({
                "status": "OK",
                "lists": row
            });
        }
    })
})

// update member
app.patch("/lists", (req, res) => {
    const { id, name, longitude, latitude, altitude } = req.body;
    const stmt = db.prepare("UPDATE lists SET name = ?, longitude = ?, latitude = ?, altitude = ? WHERE id = ?");
    stmt.run(name, longitude, latitude, altitude, id, function(err) {
        if (err) {
            res.status(400).json({
                "status": "error",
                "message": err.message
            });
            return;
        } else {
            res.status(200).json({
                "status": "OK",
                "updatedID": this.changes
            });
        }
    });
});

//delete member
app.delete("/lists/:id", (req, res) => {
    const id = req.params.id;
    const stmt = db.prepare("DELETE FROM lists WHERE id = ?");
    stmt.run(id, function(err) {
        if (err) {
            res.status(400).json({
                "status": "error",
                "message": err.message
            });
            return;
        } else {
            res.status(200).json({
                "status": "OK",
                "deletedID": this.changes
            });
        }
    });
});
