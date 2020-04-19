const argv = require('./config/yargs.js').argv;
const colors = require('colors');

const porHacer = require("./por-hacer/por-hacer.js")


let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        let milistado = porHacer.getListado(argv.estado);
        porHacer.listar(milistado);
        break;
    case 'actualizar':
        // try {
        porHacer.actualizar(argv.descripcion, argv.completado)
            // } catch (err) {
            //     console.log(err);

        // }
        break;
    case 'borrar':

        porHacer.borrar(argv.descripcion)

        break;
    case 'renombrar':

        porHacer.renombrar(argv.descripcion, argv.nuevaDescripcion);

        break;
    case 'listar':
        let listado = porHacer.getListado(argv.estado);
        porHacer.listar(listado);
        break;
    default:
        console.log("No existe esta tarea");
        break;

}