import { useMemo } from "react";
import { getSongByType } from "../helpers/getSongByType";
import { Link } from "react-router-dom"

export const SongList = ({ type }) => {

    const canciones = useMemo( () => getSongByType(type), [ type ])

    return (
        <>
        <div className="grid">
        {
            canciones.map( cancion => 
                <Link to={`/cancion/${cancion.id}`} className='item' key={cancion.id}>
                    { cancion.title }
                </Link>
            )
        }
        </div>
        </>
    )
}
