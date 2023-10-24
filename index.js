import fs from 'node:fs';
import CompositeFormater from './src/CompositeFormater.js'
import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import CitiesReporter from './src/CitiesReporter.js';

// Create formatter instances
const htmlFormatter = new FormaterHTML();
const txtFormatter = new FormaterTXT();

// Create a composite formatter and add the individual formatters
const compositeFormatter = new CompositeFormater();
compositeFormatter.addFormatter(htmlFormatter);
compositeFormatter.addFormatter(txtFormatter);

// Define a mapping between param1 values and formatter instances
const formaterStrategies = {
  html: htmlFormatter,
  txt: txtFormatter,
  composite: compositeFormatter, // Optionally, you can add more formatter options here
};

const [cmd, script, param1] = process.argv;
const filename = './data/cidades-2.json';

if (!formaterStrategies[param1]) {
  console.error('Invalid param1 value. Supported values are: html, txt, composite');
  process.exit(1);
}

let reporter = new CitiesReporter({ formaterStrategy: formaterStrategies[param1] });
let output = reporter.report(filename);
console.log(output);
