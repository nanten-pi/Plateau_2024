const express = require("express");
const app = express();

//POSTできたりするように（おまじない）
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//sqlite3関連設定
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./main.db", (err) => {
    if (err) {
        console.error("database error: " + err.messlongitude,latitude,altitude);
    } else {
        db.serialize(() => {
            //都度table削除（あれば）
            db.run("drop table if exists lists");
            //table生成（無ければ）
            db.run("create table if not exists lists( \
                id integer primary key autoincrement, \
                name nverchar(32), \
                longitude integer, \
                latitude integer \
                altitude integer \
            )", (err) => {
                if (err) {
                    console.error("table error: " + err.messlongitude,latitude,altitude);
                } else {
                    //初期データinsert
                    db.run("insert into lists(name,longitude,latitude,altitude) values(?,?)", "hoge", 11);
                    db.run("insert into lists(name,longitude,latitude,altitude) values(?,?)", "foo", 22);
                    db.run("insert into lists(name,longitude,latitude,altitude) values(?,?)", "bar", 33);
                }
            });
        });
    }
});

//リッスン開始
app.listen(3000, () => {
    console.log("Start server on port 3000.");
});

app.get("/", (req, res) => {
    res.send("welcome");
});

//create
app.post("/lists", (req, res) => {
    const reqBody = req.body;
    const stmt = db.prepare("insert into lists(name,longitude,latitude,altitude) values(?,?)"); //lastID取得のため
    stmt.run(reqBody.name, reqBody.longitude,latitude,altitude, (err, result) => { //lambda式を使うとthis.lastIDでは取得できない
        if (err) {
            res.status(400).json({
                "status": "error",
                "messlongitude,latitude,altitude": err.messlongitude,latitude,altitude
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
                "messlongitude,latitude,altitude": err.messlongitude,latitude,altitude
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
                "messlongitude,latitude,altitude": err.messlongitude,latitude,altitude
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

//update member
app.patch("/lists", (req, res) => {
    const reqBody = req.body;
    const stmt = db.prepare("update lists set name = ?, longitude,latitude,altitude = ? where id = ?");
    stmt.run(reqBody.name, reqBody.longitude,latitude,altitude, reqBody.id, (err, result) => {
        if (err) {
            res.status(400).json({
                "status": "error",
                "messlongitude,latitude,altitude": err.messlongitude,latitude,altitude
            });
            return;
        } else {
            res.status(200).json({
                "status": "OK",
                "updatedID": stmt.changes
            });
        }
    })
})

//delete member
app.delete("/lists/:id", (req, res) => {
    const id = req.params.id;
    const stmt = db.prepare("delete from lists where id = ?");
    stmt.run(id, (err, result) => {
        if (err) {
            res.status(400).json({
                "status": "error",
                "messlongitude,latitude,altitude": err.messlongitude,latitude,altitude
            });
            return;
        } else {
            res.status(200).json({
                "status": "OK",
                "deletedID": stmt.changes
            });
        }
    })
})
