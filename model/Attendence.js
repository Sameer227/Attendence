
const dbconfig = require('../config/config')
const Sequelize = require('sequelize')


 StudentAttendence = dbconfig.define('StudentAttendence',{
    
    
    
        Date:{
             primaryKey: true,
             type: Sequelize.DATEONLY
        }
    ,
    Class1:{
        type: Sequelize.JSON,
    },
    Class2:{
        type: Sequelize.JSON,
    },
    Class3: {
        type: Sequelize.JSON,
    },
    Class4:{
        type: Sequelize.JSON,
    },
    Class5: {
        type: Sequelize.JSON,
    },
    Class6:{
        type: Sequelize.JSON,
    },
    Class7:{
        type: Sequelize.JSON,
    },
    Class8:{
        type: Sequelize.JSON,
    },
    Class9:{
        type: Sequelize.JSON,
    },
    Class10:{
        type: Sequelize.JSON,
    },
   
},
{
tableName: "StudentAttendence",
timestamps: false

})
StudentAttendence.removeAttribute('id')
module.exports = StudentAttendence