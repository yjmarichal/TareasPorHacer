const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    }
    cargarDB()
    listadoPorHacer.push(porHacer)

    guardarDB()
    return porHacer
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('./db/data.json', data, 'utf8', (err) => {
        if (err)
            throw new Error("no se pudo grabar", err);
    })
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    for (let tarea of listadoPorHacer) {
        if (tarea.descripcion == descripcion) {
            if (tarea.completado == false)
                tarea.completado = false;
            else
                tarea.completado = true;
            guardarDB();
            // }  else
            //throw new Error("el completado no es un boolean")
            return true;

        }
    }
    //throw new Error("No se encontró esta tarea")
    return false;
}
const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion); //esto hace lo mismo que el for que utilice en el metodo de actualizar pero la diferencia es que me devuelve la posicion donde lo encontró;
    if (index != -1) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true
    }
    //throw new Error("No se encontró esta tarea")
    return false;
}

const renombrar = (descripcion, descripcionNueva) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion); //esto hace lo mismo que el for que utilice en el metodo de actualizar pero la diferencia es que me devuelve la posicion donde lo encontró;
    if (index != -1) {
        listadoPorHacer[index].descripcion = descripcionNueva;
        guardarDB();
        return true
    }
    //throw new Error("No se encontró esta tarea")
    return false;
}
const cargarDB = () => {

    try {
        listadoPorHacer = require("../db/data.json");
    } catch (e) {
        listadoPorHacer = [];
    }
}

const getListado = (estado) => {

    var listado = [];
    try {
        listado = require("../db/data.json");
        if (estado == "true") {
            // console.log('entró 1');

            listado = listado.filter(tarea => {
                return tarea.completado == true
            })
        } else
        if (estado == "false") {
            //console.log('entró 2');
            listado = listado.filter(tarea => {
                return tarea.completado == false
            })
        }
    } catch (e) {
        listado = [];
    }
    return listado;
}

const listar = (listado) => {
    console.log('========listado de tareas========'.blue);
    for (let tarea of listado) {
        if (tarea.completado)
            console.log(tarea.descripcion + " : " + "Completado".green);
        else
            console.log(tarea.descripcion + " : " + "Pendiente".red);
    }
    console.log('========listado de tareas========'.blue);

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    renombrar,
    listar
}