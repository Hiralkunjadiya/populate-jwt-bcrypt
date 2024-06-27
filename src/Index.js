const express = require("express");
const DbConnect = require("./db/dbConnection");
const router  = require("./routes/v1");
const app = express();

app.listen(8088, 
    () => {
            console.log("server 1000 8080");
    }
);

app.use(express.json())

app.use("/v1",router)

DbConnect()