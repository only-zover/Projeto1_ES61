import sys from 'node:sys';

import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import CitiesReporter from './src/CitiesReporter.js';
import Leaf from './src/composite/File.js';

// const [cmd, script, param1] = process.argv,
//       filename = './data/cidades-2.json';

// const formaterStrategies = {
//   'html': new FormaterHTML(),
//   'txt': new FormaterTXT()
// };

// let reporter = new CitiesReporter({
//       formaterStrategy: formaterStrategies[param1]
//     }),
//     output = reporter.report(filename);

// console.log(output);
let l = new Leaf()

l.data = "teste"

console.log(l.data)