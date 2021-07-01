const { Parser } = require('sql-ddl-to-json-schema');
// or:
//import { Parser } from 'sql-ddl-to-json-schema'

// (--.)|(((/\)+?[\w\W]+?(\*/)+))
// replace 

const replace = require('replace-in-file');
  const result = {
    files: './moodle.sql',
  from: '(^--.*)',
  to: '',
  };
 // Asynchronous replacement with async/await

  console.log(result);

// replace({
//   regex: "`",
//   replacement: "",
//   paths: ['./moodle.sql'],
//   recursive: false,
//   silent: false,
// });

const parser = new Parser('mysql');

//const moodlesql = require('./moodle.sql');

const sql =`
CREATE TABLE mdl_analytics_indicator_calc (
  id bigint(10) NOT NULL,
  starttime bigint(10) NOT NULL,
  endtime bigint(10) NOT NULL,
  contextid bigint(10) NOT NULL,
  sampleorigin varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  sampleid bigint(10) NOT NULL,
  indicator varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  value decimal(10,2) DEFAULT NULL,
  timecreated bigint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Stored indicator calculations' ROW_FORMAT=COMPRESSED;

CREATE TABLE mdl_analytics_models (
  id bigint(10) NOT NULL,
  enabled tinyint(1) NOT NULL DEFAULT 0,
  trained tinyint(1) NOT NULL DEFAULT 0,
  name varchar(1333) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  target varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  indicators longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  timesplitting varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  predictionsprocessor varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  version bigint(10) NOT NULL,
  contextids varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  timecreated bigint(10) DEFAULT NULL,
  timemodified bigint(10) NOT NULL,
  usermodified bigint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Analytic models.' ROW_FORMAT=COMPRESSED;


`

/**
 * You can get the parsed results in JSON format...
 */
//const parsedJsonFormat = parser.results;

/**
 * Get the JSON Schema if you need to modify it...
 */

 const options = {};


const jsonSchemaDocuments = parser.feed(sql)
  .toJsonSchemaArray(options);

/**
 * Or explore the compact JSON format...
 */
//const compactJsonTablesArray = parser.feed(sql)
  //.toCompactJson(parsedJsonFormat);


  //console.log("jsonSchemaDocuments",JSON. stringify(jsonSchemaDocuments, null, 4));

  //console.log("compactJsonTablesArray",compactJsonTablesArray);
  