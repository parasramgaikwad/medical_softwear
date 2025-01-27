var mysql = require('mysql')

var util = require('util')

var conn = mysql.createConnection({
    host: "bgdiqtepuprqmeviopqa-mysql.services.clever-cloud.com",
    user: "uuhg7vxeb8j5kj8p",
    password: "T5VqfkPIGmF7ywR2LqlV",
    database: "bgdiqtepuprqmeviopqa"
})

var exe = util.promisify(conn.query).bind(conn)

module.exports = exe
