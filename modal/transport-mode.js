const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.transportMode = db.define("SMB - Base Price - Category Addition",
    {
        'BusinessCode': {
            type: DataTypes.STRING
        },
        'Beam Category': {
            type: DataTypes.STRING
        },
        'Market - Country': {
            type: DataTypes.STRING
        },
        'Delivering Mill': {
            type: DataTypes.STRING
        },
        'Product Division': {
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
exports.transportModeMiniBar = db.define("SMB - Base Price - Category Addition",
    {
        'Market Customer Group': {
            type: DataTypes.STRING
        },
        'Market Customer': {
            type: DataTypes.STRING
        },
        'Market - Country': {
            type: DataTypes.STRING
        },
        'Delivering Mill': {
            type: DataTypes.STRING
        },
        'Product Division': {
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