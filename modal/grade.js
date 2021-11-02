const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.grade = db.define("SMB - Extra - Grade",
    {
        'BusinessCode': {
            type: DataTypes.STRING
        },
        'Grade Category': {
            type: DataTypes.STRING
        },
        'Market - Country': {
            type: DataTypes.STRING
        },
        'Document Item Currency': {
            type: DataTypes.STRING
        },
        'Product Division': {
            type: DataTypes.STRING
        },
        'Country Group': {
            type: DataTypes.STRING
        },
        'Amount': {
            type: DataTypes.STRING
        },
        'Currency': {
            type: DataTypes.STRING
        },
    })
exports.grade = db.define("SMB - Base Price - Category Addition",
    {
        'BusinessCode': {
            type: DataTypes.STRING
        },
        'Grade Category': {
            type: DataTypes.STRING
        },
        'Market - Country': {
            type: DataTypes.STRING
        },
        'Document Item Currency': {
            type: DataTypes.STRING
        },
        'Market Customer': {
            type: DataTypes.STRING
        },
        'Customer Group': {
            type: DataTypes.STRING
        },
        'Amount': {
            type: DataTypes.STRING
        },
        'Currency': {
            type: DataTypes.STRING
        },
    })