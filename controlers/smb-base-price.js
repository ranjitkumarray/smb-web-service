const db = require('../db/server-connection');
const basePriceSeq = require('../modal/smb-seq');
const certificate = require('../modal/extra-certificate');
const deliveryMillSeq = require('../modal/delivery-mill');
const FreightParitySeq = require('../modal/freight-parity');
const GradeSeq = require('../modal/grade');
const IncotermSeq = require('../modal/incoterm-exceptions');
const LengthLogisticSeq = require('../modal/length-logistic');
const LengthProductionSeq = require('../modal/length-production');
const ProfileIberiaItalySeq = require('../modal/profile-lberia-italy');
const ProfileSeq = require('../modal/profile');
const TransportModeSeq = require('../modal/transport-mode');
exports.basePriceAddition = function (req, res, next) {
    db.authenticate().then(() => {
        let rowData = []
        req.body.forEach((element, index) => {
            // SMB - Base Price - Category Addition
            if (element.tableName === 'SMB - Base Price - Category Addition') {
                basePriceSeq.basePrice.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Base_Price_Category_Addition': result })
                    console.log("Comming")
                    if (req.body.length === index + 1) {
                        setTimeout(() => {
                            res.setHeader('Content-Type', 'application/json');
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Base Price - Category Addition")
                })
            }
            //SMB - Base Price - Category Addition - MiniBar
            if (element.tableName === 'SMB - Base Price - Category Addition - MiniBar') {
                basePriceSeq.basePriceMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Base_Price_Category_Addition_MiniBar': result })
                    console.log(rowData)
                    if (req.body.length === index + 1) {
                        console.log(rowData, "COMing inside")
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error On SMB - Base Price - Category Addition - MiniBar ")
                })
            }
            // SMB - Extra - Delivery Mill 
            if (element.tableName === 'SMB - Extra - Delivery Mill') {
                deliveryMillSeq.deliveryMill.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Delivery_Mill': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Delivery Mill")
                })
            }
            // SMB - Extra - Delivery Mill - MiniBar
            if (element.tableName === 'SMB - Extra - Delivery Mill - MiniBar') {
                deliveryMillSeq.deliveryMillMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Delivery_Mill_MiniBar': result })
                    console.log(rowData)
                    if (req.body.length === index + 1) {
                        console.log(rowData, "COMing inside")
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error On SMB - Extra - Delivery Mill - MiniBar ")
                })
            }
            // SMB - Extra - Certificate
            if (element.tableName === 'SMB - Extra - Certificate') {
                certificate.extraCertificate.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Certificate': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Certificate")
                })
            }
            // SMB - Extra - Certificate - MiniBar
            if (element.tableName === 'SMB - Extra - Certificate - MiniBar') {
                certificate.extraCertificateMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Certificate_MiniBar': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Certificate - MiniBar")
                })
            }
            // SMB - Extra - Freight Parity
            if (element.tableName === 'SMB - Extra - Freight Parity') {
                FreightParitySeq.freightParity.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Freight_Parity': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Base Price - Category Addition")
                })
            }
            // SMB - Extra - Freight Parity - MiniBar
            if (element.tableName === 'SMB - Extra - Freight Parity - MiniBar') {
                FreightParitySeq.freightParityMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Freight_Parity_MiniBar': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Freight Parity - MiniBar")
                })
            }
            // SMB - Extra - Grade
            if (element.tableName === 'SMB - Extra - Grade') {
                GradeSeq.grade.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Grade': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Grade")
                })
            }
            // SMB - Extra - Grade - MiniBar
            if (element.tableName === 'SMB - Extra - Grade - MiniBar') {
                GradeSeq.gradeMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Grade_MiniBar': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Grade - MiniBar")
                })
            }
            //SMB - Base Price - Incoterm Exceptions
            if (element.tableName === 'SMB - Base Price - Incoterm Exceptions') {
                IncotermSeq.incotermExceptions.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Incoterm_Exceptions': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Base Price - Incoterm Exceptions")
                })
            }
            // SMB - Extra - Length Logistic
            if (element.tableName === 'SMB - Extra - Length Logistic') {
                LengthLogisticSeq.lengthLogistic.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Length_Logistic': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Length Logistic")
                })
            }
            //SMB - Extra - Length Logistic - MiniBar
            if (element.tableName === 'SMB - Extra - Length Logistic - MiniBar') {
                LengthLogisticSeq.lengthLogisticMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Length_Logistic_MiniBar': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("SMB - Extra - Length Logistic - MiniBar")
                })
            }
            //SMB - Extra - Length Production
            if (element.tableName === 'SMB - Extra - Length Production') {
                LengthProductionSeq.lengthProduction.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Length_Production': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Length Production")
                })
            }
            //SMB - Extra - Length Production - MiniBar
            if (element.tableName === 'SMB - Extra - Length Production - MiniBar') {
                LengthProductionSeq.lengthProductionMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Length_Production_MiniBar': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Length Production - MiniBar")
                })
            }
            //SMB - Extra - Profile Iberia and Italy
            if (element.tableName === 'SMB - Extra - Profile Iberia and Italy') {
                ProfileIberiaItalySeq.profileLberiaItaly.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Profile_Iberia_and_Italy': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Profile Iberia and Italy")
                })
            }
            //SMB - Extra - Profile Iberia and Italy - MiniBar
            if (element.tableName === 'SMB - Extra - Profile Iberia and Italy - MiniBar') {
                ProfileIberiaItalySeq.profileLberiaItalyMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Profile_Iberia_and_Italy_MiniBar': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Profile Iberia and Italy - MiniBar")
                })
            }
            //SMB - Extra - Profile
            if (element.tableName === 'SMB - Extra - Profile') {
                ProfileSeq.profile.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Profile': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Profile")
                })
            }
            //SMB - Extra - Profile - MiniBar
            if (element.tableName === 'SMB - Extra - Profile - MiniBar') {
                ProfileSeq.profileMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Profile_MiniBar': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Profile - MiniBar")
                })
            }
            //SMB - Extra - Transport Mode
            if (element.tableName === 'SMB - Extra - Transport Mode') {
                TransportModeSeq.transportMode.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Transport_Mode': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Transport Mode")
                })
            }
            //SMB - Extra - Transport Mode - MiniBar
            if (element.tableName === 'SMB - Extra - Transport Mode - MiniBar') {
                TransportModeSeq.transportModeMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'Transport_Mode_MiniBar': result })
                    if (req.body.length === index + 1) {
                        res.setHeader('Content-Type', 'application/json');
                        setTimeout(() => {
                            res.status(200).send(JSON.stringify(rowData))
                        })
                    }
                }).catch(error => {
                    res.status(404).send("Error on SMB - Extra - Transport Mode - MiniBar")
                })
            }
        });

    }).catch(error => {
        console.log(error)
        res.status(400).json({
            message: "Email already exits",
            status_code: 400
        });
    });
}