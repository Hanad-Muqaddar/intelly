const express = require('express')
const app = express()
const port = 3000
const courses = require('./courses')
const dbhnadle = require('./dbhandler')
app.use('/courses', courses)
app.use('/getdata', dbhnadle)

// Middle ware Function //
helo = (req, res, next) => {
console.log('Hello from middelware function.')
next()
};
app.use(helo)
//////

app.get('/', (req, res) => {
  res.send('Hello from the Express.')
})


app.get('/hanad', (req, res) => {
    res.send('Hello from the Hanad This is my first Express file.')
  })


app.get('/addition/:a/:b', (req, res) => {
    a = Number(req.params.a)
    b = Number(req.params.b)
    c = a+b
    res.send('Sum is: ' + c)
  })

  
app.get('*', (req, res) => {
    res.send('Error 404')
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})