const express = require("express");
const app = express();
const {authPage,authCourse} = require('./middlewares');
app.use(express.json());

app.get("/home", (req, res) => {
    res.json("Home page")
})

app.get("/course/grades", authPage(["teacher", "admin"]), (req, res) => {
    res.json({
        lawrence: 100,
        maria: 98,
        jona: 45,
        viv: 65
    });
})

app.get("/course/:number", authCourse, (req, res) => {
    const courseNumber = req.params.number;
    res.json(`you have access to course number ${courseNumber}`)

})
app.listen(3001, () => {
    console.log("Listening protocol activated on port 3001")
})