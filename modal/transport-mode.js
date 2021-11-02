const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.transportMode = db.define("SMB - Extra - Transport Mode",
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
exports.transportModeMiniBar = db.define("SMB - Extra - Transport Mode - MiniBar",
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