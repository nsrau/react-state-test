const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/stream", (req, res) => {
    res.writeHead(200, {
        Connection: "keep-alive",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache"
    });
    setInterval(() => {
        let item = {
            key: Math.floor(Math.random() * 10000 + 1),
            test1: Math.floor(Math.random() * 10000 + 1),
            test2: Math.floor(Math.random() * 10000 + 1),
            test3: Math.floor(Math.random() * 10000 + 1),
            test4: Math.floor(Math.random() * 10000 + 1),
            test5: Math.floor(Math.random() * 10000 + 1),
            test6: Math.floor(Math.random() * 10000 + 1),
        }
        res.write("data:" + JSON.stringify(item));
        res.write("\n\n");
    }, 3000);
})

const server = app.listen(4000, function () {
    console.log('CORS-enabled web server listening on port 4000');
});