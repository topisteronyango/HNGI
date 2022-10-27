const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.json({slackUsername: 'topingstar', backend: true, age : 24, bio: 'I am Topister, 24 years old. Currently a computer science student at African Leadership University. I am more focused in Backend development.I much interested in learning new technology.'})

})

app.listen(3000, function () {
    console.log('Listening on port 3000')
})