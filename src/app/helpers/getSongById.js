import {canciones } from "../data/canciones";

export const getSongById = ( id ) => {
    return canciones.find( cancion => cancion.id === id );
}