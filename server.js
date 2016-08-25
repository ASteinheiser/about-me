const express = require('express')
const path = require('path')

const app = express()

const port = process.env.port || 80

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {},
  })
})

app.listen(port, function () {
  console.log("Server started on port: ", port)
})
