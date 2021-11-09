const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.lengthLogistic = db.define("SMB - Extra - Length Logistic",
    {
        'Country Group': {
            type: DataTypes.STRING
        },
        'Market - Country': {
            type: DataTypes.STRING
        },
        'Delivering Mill': {
            type: DataTypes.STRING
        },
        'Length': {
            type: DataTypes.STRING
        },
        'Length From': {
            type: DataTypes.STRING
        },
        'Length To': {
            type: DataTypes.STRING
        },
        'Transport Mode': {
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
    },
    {
        freezeTableName: true,
        timestamps: false,
        schema: 'SMB' 

    })
exports.lengthLogisticMiniBar = db.define("SMB - Extra - Length Logistic - MiniBar",
    {
        'Customer Group': {
            type: DataTypes.STRING
        },
        'Market - Country': {
            type: DataTypes.STRING
        },
        'Delivering Mill': {
            type: DataTypes.STRING
        },
        'Length': {
            type: DataTypes.STRING
        },
        'Length From': {
            type: DataTypes.STRING
        },
        'Length To': {
            type: DataTypes.STRING
        },
        'Transport Mode': {
            type: DataTypes.STRING
        },
        'Document Item Currency': {
            type: DataTypes.STRING
        },
        'Market Customer': {
            type: DataTypes.STRING
        },
        'Amount': {
            type: DataTypes.STRING
        },
        'Currency': {
            type: DataTypes.STRING
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
        schema: 'SMB' 

    })