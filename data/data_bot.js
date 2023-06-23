const fs = require('fs');

const transHealthSA = fs.readFileSync("./transhealth_data.txt").toString()
const lines = transHealthSA.split('\n').slice(1)
let insertCommand = 'INSERT INTO doctors(doc_name, content, suburb, category, sub_category, phone, lat, lng, address, u18, o18, u25, low_cost_ndis_option, gp_ref_required) VALUES'
const apostrophe = /[’']/g

lines.forEach(line => {
    const doctorArr = line.split('\t')
    // let id = doctorArr[0]
    let name = doctorArr[2]
    let content = doctorArr[3]
    let suburb = doctorArr[7].replaceAll(apostrophe, "''")
    let category = doctorArr[9]
    let subcategory = doctorArr[24]
    let phone = doctorArr[11]
    let lat = 0
    let lng = 0
    let address = doctorArr[26].replace('\r', '').replaceAll(apostrophe, "''")
    let u18 = false
    let o18 = false
    let u25 = false
    let lowCostNDISOption = false
    let gpRefRequired = false

    if (doctorArr[19].length > 1) {
        lat = doctorArr[19]
    }

    if (doctorArr[20].length > 1) {
        lng = doctorArr[20]
    }

    if (content.includes('Under 18')) {
        u18 = true
    }

    if (content.includes('Over 18')) {
        o18 = true
    }

    if (content.includes('Under 25')) {
        u25 = true
    }

    if (content.includes('Low/no/NDIS cost options')) {
        lowCostNDISOption = true
    }

    if (content.includes('GP referral may be required')) {
        gpRefRequired = true
    }

    if (lines.indexOf(line) === lines.length - 1) {
        insertCommand += `\n('${name}', '${content}', '${suburb}', '${category}', '${subcategory}', '${phone}', ${lat}, ${lng}, '${address}', ${u18}, ${o18}, ${u25}, ${lowCostNDISOption}, ${gpRefRequired});`
    } else {
        insertCommand += `\n('${name}', '${content}', '${suburb}', '${category}', '${subcategory}', '${phone}', ${lat}, ${lng}, '${address}', ${u18}, ${o18}, ${u25}, ${lowCostNDISOption}, ${gpRefRequired}),`
    }
})


console.log(insertCommand)