const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

app.get("/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({
                message: "Welcome to the API 🤣",
                authData
            })
        }
    })
    res.json({ message: "Welcome to the API" })
});

app.post("/login", (req, res) => {

    const user = {
        id: 1,
        username: "Lawrence",
        email: "lawrence@gmail.com"

    }
    const accessToken = jwt.sign({ user: user }, "secretkey", (err, token) => {
        res.json({
            token
        })
    });

  


})
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== undefined) {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403)//forbidden
    }

}
   
app.listen(3005, () => {
    console.log("Listening PROTOCOL active on 3005")
})

