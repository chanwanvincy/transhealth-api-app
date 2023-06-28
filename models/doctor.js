const db = require('../db/db')

const Doctor = {
    findAll: () => {
        const sql = 'SELECT * FROM doctors'

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    },

    create: (doc_name, content, suburb, category, sub_category, phone, lat, lng, address, u18, o18, u25, low_cost_ndis_option, gp_ref_required) => {
        const sql = `
        INSERT INTO doctors(doc_name, content, suburb, category, sub_category, phone, lat, lng, address, u18, o18, u25, low_cost_ndis_option, gp_ref_required)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING *
      `

        return db
            .query(sql, [doc_name, content, suburb, category, sub_category, phone, lat, lng, address, u18, o18, u25, low_cost_ndis_option, gp_ref_required])
            .then(dbRes => dbRes.rows[0])
    }
}

module.exports = Doctor