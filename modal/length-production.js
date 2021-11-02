const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.lengthProduction = db.define("SMB - Base Price - Category Addition",
    {
        'BusinessCode':{
            type:DataTypes.STRING
        },
        'Market - Country':{
            type:DataTypes.STRING
        },
        'Delivering Mill':{
            type:DataTypes.STRING
        },
        'Length':{
            type:DataTypes.STRING
        }, 
        'Length From':{
            type:DataTypes.STRING
        }, 
        'Length To':{
            type:DataTypes.STRING
        },
        'Document Item Currency':{
            type:DataTypes.STRING
        },
        'Country Group':{
            type:DataTypes.STRING
        },
        'Amount':{
            type:DataTypes.STRING
        },
        'Currency':{
            type:DataTypes.STRING
        },
    })
exports.lengthProductionMiniBar = db.define("SMB - Base Price - Category Addition",
    {
        'BusinessCode':{
            type:DataTypes.STRING
        },
        'Market - Country':{
            type:DataTypes.STRING
        },
        'Delivering Mill':{
            type:DataTypes.STRING
        },
        'Length':{
            type:DataTypes.STRING
        }, 
        'Length From':{
            type:DataTypes.STRING
        }, 
        'Length To':{
            type:DataTypes.STRING
        },
        'Document Item Currency':{
            type:DataTypes.STRING
        },
        'Market Customer':{
            type:DataTypes.STRING
        },
        'Customer Group':{
            type:DataTypes.STRING
        },
        'Amount':{
            type:DataTypes.STRING
        },
        'Currency':{
            type:DataTypes.STRING
        },
    })