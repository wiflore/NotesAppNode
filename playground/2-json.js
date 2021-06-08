const fs = require('fs')
const dataBuffer = fs.readFileSync('2-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'William'
user.age = 36

const userJSON = JSON.stringify(user)
fs.writeFileSync('3-json.json', userJSON)