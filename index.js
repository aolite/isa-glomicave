const N3 = require('n3');
const fs = require('fs')

const parser = new N3.Parser();

const rdfStream = fs.createReadStream('./isa-glomicave.ttl');

parser.parse(rdfStream, console.log);