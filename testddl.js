import fs from 'fs'
import path  from 'path';


//const { Parser } = require('sql-ddl-to-json-schema');
// or:
import { Parser } from 'sql-ddl-to-json-schema'

const __dirname = path.resolve();
// 

const regex = new RegExp(/(--.*)|([/][*].*)|`|(SET SQL_MODE.*)|(SET time_zone.*)|(START.*)/g);

//replace-in-file
//const replacein = require('replace-in-file');
import pkg from 'replace-in-file'

const replacein = pkg;
const opt =  {
  files: './output/testfile.sql',
  from: regex,
  to: '',
};

try {
  const results = await replacein(opt)
  console.log('Replacement results:', results);
}
catch (error) {
  console.error('Error occurred:', opt);
}

const parser = new Parser('mysql');

 const options = {};

 const moodlesql =fs.readFileSync(__dirname + '/output/testfile.sql');

const jsonSchemaDocuments = parser.feed(moodlesql.toString())
 .toJsonSchemaArray(options);

const finalresult= JSON.stringify(jsonSchemaDocuments, null, 4);

  fs.writeFile('MoodleDB-new.json', finalresult, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
