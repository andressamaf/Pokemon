/**
 * Pokemon.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        nombre: {
            type: 'string'
        }
        , descripcion: {
            type: 'string'
        }
        , imagen: {
            type: 'string'
        }
        , numeroPokemon: {
            type: 'float'
        }
        , habilidad: {
            type: 'string'
        }
        , habilidadOculta: {
            type: 'string'
        }
        , color: {
            type: 'string'
        }
        , velocidad: {
            type: 'float'
        }
        , fortaleza: {
            type: 'float'
        }
        , precision: {
            type: 'float'
        }
        , resistencia: {
            type: 'float'
        }
        , salto: {
            type: 'float'
        }
    }
};