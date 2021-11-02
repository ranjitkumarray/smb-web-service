const db = require('../db/server-connection');
const indexed = require('../modal/smb-seq');
exports.basePriceAddition = function (req, res, next) {
    db.authenticate().then(() => {
        let rowData=[]
        req.body.forEach((element, index) => {
            if (element.tableName === 'SMB - Base Price - Category Addition') {
                indexed.basePrice.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'base_price': result })
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
            if (element.tableName === 'SMB - Base Price - Category Addition - MiniBar') {
                indexed.basePriceMiniBar.findAll({
                    where: element.data, raw: true
                }).then((result) => {
                    rowData.push({ 'base_price_miniBar': result })
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
        });

    }).catch(error => {
        console.log(error)
        res.status(400).json({
            message: "Email already exits",
            status_code: 400
        });
    });
}