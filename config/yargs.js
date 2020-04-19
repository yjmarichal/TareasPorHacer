const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};
const nuevaDescripcion = {
    demand: true,
    alias: 'n',
    desc: "nueva descripción de la tarea por hacer"
};

const completado = {
    alias: 'c',
    default: true,
    desc: "Marca como completado o pendiente una tarea"
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de completado', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .command('renombrar', 'renombra una tarea', {
        descripcion,
        nuevaDescripcion
    })
    .command('listar', 'Muestra en consola las tareas', {
        estado: {
            alias: 'e',
            default: null,
            desc: "Muestra el listado de todos las tareas por defecto si no se le asigna valor a -e o si se le asigna cualquiera que no sea true o fasle, o las pendientes(-e false), o las completadas(-e true) segun se diga"
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}