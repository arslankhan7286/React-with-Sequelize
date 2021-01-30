// Customers Schema 

module.exports=(sequelize,DataTypes)=>{
    let Customers = sequelize.define('Customers',{
        customerName : DataTypes.STRING,
        contactNumber	: DataTypes.STRING,
        address	: DataTypes.STRING,
        city	: DataTypes.STRING,
        postalCode	: DataTypes.STRING,
        country: DataTypes.STRING,
        userID : DataTypes.INTEGER

    });

    Customers.associate = function (models) {
        Customers.belongsTo(models.Users, {
          foreignKey: 'userID',
          as: 'user_customer_ID'
        });
        
      };
    return Customers;
}