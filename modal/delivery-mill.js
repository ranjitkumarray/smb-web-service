const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.deliveryMill = db.define("SMB - Extra - Delivery Mill",
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
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        schema: 'SMB' 

    })
exports.deliveryMillMiniBar = db.define("SMB - Extra - Delivery Mill - MiniBar",
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
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        schema: 'SMB' 

    })