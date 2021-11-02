const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.basePrice = db.define("SMB - Base Price - Category Addition",
    {
        "id": {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        "BusinessCode": {
            type: DataTypes.STRING,
            required: true,
        },
        "Market - Country": {
            type: DataTypes.STRING,
            required: true,
        },
        "Product Division": {
            type: DataTypes.STRING,
            required: true,
        },
        "Product Lavel 02": {
            type: DataTypes.STRING,
            required: true,
        },
        "Document Item Currency": {
            type: DataTypes.STRING,
            required: true,
        },
        Amount: {
            type: DataTypes.STRING,
            required: true,
            allowNull: true,

        },
        Currency: {
            type: DataTypes.STRING,
            required: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)
exports.basePriceMiniBar = db.define("SMB - Base Price - Category Addition - MiniBar",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        "BusinessCode": {
            type: DataTypes.STRING,
            required: true,
        },
        "Customer Group": {
            type: DataTypes.STRING,
            required: true,
        },
        "Market - Customer": {
            type: DataTypes.STRING,
            required: true,
        },
        "Market - Country": {
            type: DataTypes.STRING,
            required: true,
        },
        "Beam Category": {
            type: DataTypes.STRING,
            required: true,
        },
        "Document Item Currency": {
            type: DataTypes.STRING,
            required: true,
        },
        "Amount": {
            type: DataTypes.STRING,
            required: true,
            allowNull: true,

        },
        "Currency": {
            type: DataTypes.STRING,
            required: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)