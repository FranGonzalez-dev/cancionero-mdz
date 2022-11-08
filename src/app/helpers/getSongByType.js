import { canciones } from "../data/canciones";

export const getSongByType = ( type ) => {
    const validTypes = ['Alabanza', 'Adoracion'];
    if( !validTypes.includes( type )) {
        throw new Error( `${ type } no es un tipo válido` );
    }
    return canciones.filter( cancion => cancion.type === type );
}