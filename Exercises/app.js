const fs = require( 'fs')
const validator = require('validator')
const chalk = require('chalk')
const name = require ('../utils.js')
const getNotes = require ('../notes.js')

const command = process.argv[2]
if (command === 'add') {
 console.log('Adding note!')
} else if (command === 'remove') {
 console.log('Removing note!')
}

notes = getNotes()


fs.writeFileSync('notes.txt', 'Example')
fs.appendFileSync('notes.txt', 'new line')
console.log(name)
console.log(notes)
console.log(validator.isEmail('example.com'))
console.log(validator.isURL('example.com'))
console.log(chalk.green.inverse.bold('Success'))

const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
    title: {
    describe: 'Note title',
    demandOption: true,
    type: 'string'
    },
    body: {
    describe: 'Note body',
    demandOption: true,
    type: 'string'
    }
    },
    handler: function (argv) {
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
    }
   }) 

