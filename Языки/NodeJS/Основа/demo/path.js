//const path = require('path');

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import path from 'path'

console.log(`Название файла ${path.basename(__filename)}`);
console.log('Директория', path.dirname(__dirname));
console.log('Расширение файла: ', path.extname(__filename));
console.log('Parse', path.parse(__filename));