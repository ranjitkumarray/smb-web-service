const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.incotermExceptions = db.define("SMB - Base Price - Incoterm Exceptions",
    {
        'Market - Country': {
            type: DataTypes.STRING
        },
        'Product Division': {
            type: DataTypes.STRING
        },
        'Incoterm1': {
            type: DataTypes.STRING
        },
        'Customer Group': {
            type: DataTypes.STRING
        },
        'Beam Category': {
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
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        schema: 'SMB' 

    })