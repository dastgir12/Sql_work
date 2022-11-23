const {Sequalize , DataTypes} = require('sequelize');

const sequalize = new Sequalize('first' , 'root' , 'root' , {
    host :'localhost',
    dialect:'mysql',
    pool:{max:5 , min:0, idle:10000}
});


//to check connection we use authenticate method
sequalize.authenticate()
.then(()=>{
    console.log('connected');
})
.catch(err=>{
    console.log('Error'+err);
});

const db = {};
db.Sequalize = Sequalize;
db.sequalize = sequalize;

db.users = require('./user')(sequalize,DataTypes)

db.sequalize.sync()
.then(()=>{
console.log('ho gya conection');
})
.catch(err=>{
    console.log("Error" + err);
})