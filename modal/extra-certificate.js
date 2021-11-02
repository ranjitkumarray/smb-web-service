const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/server-connection');
exports.extraCertificate = db.define("SMB - Extra - Certificate",
    {
        'BusinessCode': {
            type: DataTypes.STRING
        },
        'Certificate': {
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
        'Delivering Mill': {
            type: DataTypes.STRING
        },
        'Amount': {
            type: DataTypes.STRING
        },
        'Currency': {
            type: DataTypes.STRING
        }
    })

exports.extraCertificateMiniBar = db.define("SMB - Extra - Certificate - MiniBar",
    {
        'BusinessCode': {
            type: DataTypes.STRING
        },
        'Certificate': {
            type: DataTypes.STRING
        },
        'Market Customer': {
            type: DataTypes.STRING
        },
        'Market - Country': {
            type: DataTypes.STRING
        },
        'Grade Category': {
            type: DataTypes.STRING
        },
        'Customer Group': {
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
    })
