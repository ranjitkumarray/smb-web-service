const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.profileLberiaItaly = db.define("SMB - Extra - Profile Iberia and Italy",
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
        'Product Level 02':{
            type:DataTypes.STRING
        },
        'Product Level 05':{
            type:DataTypes.STRING
        },
        'Document Item Currency':{
            type:DataTypes.STRING
        },
        'Amount':{
            type:DataTypes.STRING
        },
        'Currency':{
            type:DataTypes.STRING
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
        schema: 'SMB' 

    })
exports.profileLberiaItalyMiniBar = db.define("SMB - Base Price - Category Addition",
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
        'Product Level 02':{
            type:DataTypes.STRING
        },
        'Product Level 05':{
            type:DataTypes.STRING
        },
        'Document Item Currency':{
            type:DataTypes.STRING
        },
        'Market Customer':{
            type:DataTypes.STRING
        },
        'Market Customer Group':{
            type:DataTypes.STRING
        },
        'Amount':{
            type:DataTypes.STRING
        },
        'Currency':{
            type:DataTypes.STRING
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
        schema: 'SMB' 

    })