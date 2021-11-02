
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.freightParity = db.define("SMB - Extra - Freight Parity",
    {
        "Delivering Mill": {
            type: DataTypes.STRING
        },
        "Market - Country": {
            type: DataTypes.STRING
        },
        "Zip Code (Dest)": {
            type: DataTypes.STRING
        },
        "Product Division": {
            type: DataTypes.STRING
        },
        "Document Item Currency": {
            type: DataTypes.STRING
        },
        "Amount": {
            type: DataTypes.STRING
        },
        "Currency": {
            type: DataTypes.STRING
        },
    })
exports.freightParity = db.define("SMB - Extra - Freight Parity - MiniBar",
    {
        "Delivering Mill": {
            type: DataTypes.STRING
        },
        "Market - Country": {
            type: DataTypes.STRING
        },
        "Zip Code (Dest)": {
            type: DataTypes.STRING
        },
        "Product Division": {
            type: DataTypes.STRING
        },
        "Document Item Currency": {
            type: DataTypes.STRING
        },
        "Amount": {
            type: DataTypes.STRING
        },
        "Currency": {
            type: DataTypes.STRING
        },
        "Market Customer": {
            type: DataTypes.STRING
        },
        "Market Customer Group": {
            type: DataTypes.STRING
        },
    })