//to define model:

module.exports  = (sequalize , DataTypes)=>{
    const User = sequalize.define("users",{
        name:DataTypes.STRING,
        email:{
                type:DataTypes.STRING,
                defaultValue : 'test@gmail.com'
            },
            gender:{
                type:DataTypes.STRING
            }
    })
}