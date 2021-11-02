const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.profile = db.define("SMB - Base Price - Category Addition",
    {
        'BusinessCode': {
            type: DataTypes.STRING
        },
        'Market - Country': {
            type: DataTypes.STRING
        },
        'Product Division': {
            type: DataTypes.STRING
        },
        'Product Level 04': {
            type: DataTypes.STRING
        },
        'Product Level 05': {
            type: DataTypes.STRING
        },
        'Product Level 02': {
            type: DataTypes.STRING
        },
        'Delivering Mill': {
            type: DataTypes.STRING
        },
        'Document Item Currency': {
            type: DataTypes.STRING
        },
        'Amount': {
            type: DataTypes.STRING
        },
        'Currency': {
            type: DataTypes.STRING
        },
    })
exports.profileMiniBar = db.define("SMB - Base Price - Category Addition",
    {
        'BusinessCode': {
            type: DataTypes.STRING
        },
        'Market - Country': {
            type: DataTypes.STRING
        },
        'Product_Level_04': {
            type: DataTypes.STRING
        },
        'Product Level 05': {
            type: DataTypes.STRING
        },
        'Product Level 02': {
            type: DataTypes.STRING
        },
        'Delivering Mill': {
            type: DataTypes.STRING
        },
        'Customer Group': {
            type: DataTypes.STRING
        },
        'Market Customer': {
            type: DataTypes.STRING
        },
        'Document Item Currency': {
            type: DataTypes.STRING
        },
        'Amount': {
            type: DataTypes.STRING
        },
        'Currency': {
            type: DataTypes.STRING
        },
    })