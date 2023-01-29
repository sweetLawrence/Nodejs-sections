const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
    console.log(req.url, "@", Date.now(), "things.js file is handling this.")
    next();
})
router.route('/toys')
    .get((req, res) => {/*
//things/toys
*/
        res.send('Hi get /things/toys')
    })
    .post((req, res) => {/*handle root*/
        res.send('Hi post /things/toys')
    })

router.route('/toys/:toyId')
    .get((req, res) => {
        // res.send('890')
        res.status(200).send('Hi get /things/toys' + " " + req.params.toyId)
    })
    .put((req, res) => {
        res.status(200).send('Hi put /things/toys' + " " + req.params.toyId)
    })

module.exports = router