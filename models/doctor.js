const db = require('../db/db')

const Doctor = {
    findAll: () => {
        const sql = 'SELECT * FROM doctors'

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Doctor