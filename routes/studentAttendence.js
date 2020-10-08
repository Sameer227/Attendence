const express = require ('express');
const datetime = require('date-and-time')

const router = express.Router();
const Sequelize = require('sequelize')
const attendence = require('../model/Attendence')
const db1 = require('../model/AttendenceLog');
const { query } = require('express');


router.post('/attendence1', async function(req, res){
    console.log(req.body)
    
    var date = new Date()
    console.log(date);
    console.log(datetime.format(date, 'YYYY-MM-DD'))
    var date1 = datetime.format(date, 'YYYY-MM-DD')
    console.log(req.body.attendence)
   var query = JSON.parse("{ \"Class"+req.body.Class+"\": "+JSON.stringify(req.body.attendence)+"}");

    console.log(query)
    
   
    let att = await attendence.findOne({where: {Date: date1}})
    if(att){
        await attendence.update(query,{
            where: {Date: date1}
        })
    }
    else{
      //  await attendence.create({: req.body.Class1})
    }
   
    res.sendStatus(200)
})







router.post('/attendence', async function(req, res){


    var max =  db1.findAll ({
        where: ['RollNo', [sequelize.fn('count', sequelize.col('RollNo')), 'count']] })
//    var date = await new Date()
 
    //  db.create( {
    //      Date:date,
    //      Class1:req.body.class1,
    //      Class2:req.body.class2,
    //      Class3:req.body.class3,
    //      Class4:req.body.class4,
    //      Class5:req.body.class5,
    //      Class6:req.body.class6,
    //      Class7:req.body.class7,
    //      Class9:req.body.class9,
    //      Class10:req.body.class10
    // }).then(

        //  total = db1.findAll({
        //     where: ['RollNo', [sequelize.fn('count', sequelize.col('RollNo')), 'count']] })

        
                var student =  db1.findAll({where:{RollNo:i}})
                var present =  student.NoOfPresent
                var absent =  student.NoOfAbsent
                var application = student.NoOfLeaves
                var days = student.TotalDays
                var currentpresentstatus = req.body.i.present.value
                var currentabsentstatus = req.body.i.absent.value
                var currentleavestatus = req.body.i.leave.value

                await db1.update({
                    NoOfPresent: present + currentpresentstatus ,
                    NoOfAbsent: absent + currentabsentstatus,
                    NoOfLeaves: application + currentleavestatus,
                    TotalDays: days + currentleavestatus + currentpresentstatus + currentabsentstatus
                })


            }

        // db.findAll({where:{RollNo:i}})
        // db1.update()
    )

    



module.exports = router