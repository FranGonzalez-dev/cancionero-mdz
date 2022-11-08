import { canciones } from "../data";

export const getSongById = ( id ) => {
    return canciones.find( cancion => cancion.id === id );
}