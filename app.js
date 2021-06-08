const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.version('1.1.0')

//Create a note
yargs.command({
    command: 'add',
    describe: 'Add a new role',
    handler: function() {
        console.log('Adding a new note!')
    }
})

//Remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a role',
    handler: function() {
        console.log('Removing note!')
    }
})

//Read a note
yargs.command({
    command: 'read',
    describe: 'Read a role',
    handler: function() {
        console.log('Reading note!')
    }
})

console.log(yargs.argv)