/* Node JS - Entorno de ejecucion*/
/* NPM - Node Packeage Manager */
/* console.log('hola no uso navegador'); */


/* csv-parse */

import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";

const archivoCSV = readFileSync('./Data/cursos.csv','utf-8');
console.log(typeof(archivoCSV))
const archivoCSVArreglo = parse(archivoCSV)
console.log(archivoCSVArreglo)