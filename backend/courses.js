const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    var out = '<h2> Welcome to Courses Page</h2>';
    out += `<a href="/Courses"> Courses Index page</a><br>`;
    out += `<a href="/Courses/andriod"> Andriod</a><br>`;
    out += `<a href="/Courses/mongo"> MongoDb</a><br>`;
    out += `<a href="/Courses/expressjs"> Express Js</a><br>`;
    res.send(out);
})

router.get('/andriod', (req, res) => {
    var out = '<h2> Welcome to Andriod</h2>';
    out += `<a href="/Courses"> Courses Index page"</a><br>`;
    out += `<a href="/Courses/andriod"> Andriod"</a><br>`;
    out += `<a href="/Courses/mongo"> MongoDb"</a><br>`;
    out += `<a href="/Courses/expressjs"> Express Js</a><br>`;
    res.send(out);
})

router.get('/mongo', (req, res) => {
    var out = '<h2> Welcome to Mongo</h2>';
    out += `<a href="/Courses"> Courses Index page"</a><br>`;
    out += `<a href="/Courses/andriod"> Andriod"</a><br>`;
    out += `<a href="/Courses/mongo"> MongoDb"</a><br>`;
    out += `<a href="/Courses/expressjs"> Express Js</a><br>`;
    res.send(out);
})

router.get('/expressjs', (req, res) => {
    var out = '<h2> Welcome to expressjs</h2>';
    out += `<a href="/Courses"> Courses Index page"</a><br>`;
    out += `<a href="/Courses/andriod"> Andriod"</a><br>`;
    out += `<a href="/Courses/mongo"> MongoDb"</a><br>`;
    out += `<a href="/Courses/expressjs"> Express Js</a><br>`;
    res.send(out);
})

module.exports = router;