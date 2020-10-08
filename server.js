const express = require('express')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')

const dbConfig = require('./config/config')

var app = express()
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors({origin:"http://localhost:3000"}))


dbConfig.authenticate().then(() => {
    console.log("database connected")
}).catch(err => console.log('Error: '+ err))








const Attendence = require('./routes/studentAttendence')

app.post('/attendence1',Attendence)





// dbConfig.sync(
//     {
//     logging: console.log,
//     force: true
// }
// )
// .then(() =>{
//     console.log('connection to database established successfully.');
// })
// .catch(err => {
//     console.log("unable to connect to db",err);
// });

app.listen(4900 , console.log("server is running"))