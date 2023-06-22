const fs = require('fs');

const transHealthSA = fs.readFileSync("./transhealth_data.txt").toString()
const lines = transHealthSA.split('\n').slice(1)
let southAusDocs = []

lines.forEach(line => {
    const doctorArr = line.split('\t')
    // let id = doctorArr[0]
    let name = doctorArr[2]
    let content = doctorArr[3]
    let suburb = doctorArr[7]
    let category = doctorArr[9]
    let phone = doctorArr[11]
    let lat = doctorArr[19]
    let long = doctorArr[20]
    let address = doctorArr[25].replace('\r', '')
    let U18 = ''
    let O18 = ''
    let U25 = ''
    let lowCostNDISOption = ''
    let gpRefRequired = ''

    if (content.includes('Under 18')) {
        U18 = 'true'
    }

    if (content.includes('Over 18')) {
        O18 = 'true'
    }

    if (content.includes('Under 25')) {
        U25 = 'true'
    }

    if (content.includes('Low/no/NDIS cost options')) {
        lowCostNDISOption = 'true'
    }

    if (content.includes('GP referral may be required')) {
        gpRefRequired = 'true'
    }

    let doctor = {
        // 'id': id,
        'name': name,
        'suburb': suburb,
        'category': category,
        'U18': U18,
        'O18': O18,
        'U25': U25,
        'lowCostNDISOption': lowCostNDISOption,
        'gpRefRequired': gpRefRequired,
        'phone': phone,
        'lat': lat,
        'long': long,
        'address': address
    }

    southAusDocs.push(doctor)
})



console.log(southAusDocs)