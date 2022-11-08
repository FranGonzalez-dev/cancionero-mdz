import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getSongById } from "../helpers/getSongById";

export const Cancion = () => {
    const { id } = useParams();
    const song = useMemo( () => getSongById( id ), [ id ]);
    if ( !song ) return <Navigate to='/' />

    const navigate = useNavigate();
    const onNavigate = () => {
        navigate(-1)
    }


    return (
        <>
        <div className="container my-4 bg-white p-5 shadow animate__animated animate__fadeIn">
            <div className="btn-container">
                <button onClick={ onNavigate } className="btn btn-primary">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAaklEQVRIie3VMQqAMAxG4eh19DiKg97F1TsrvC4KJZhBSTPlbe3y8S+tSBYdMEQgM3ACRwTy5I8Bi0K4z6MnopcAXMCaSCKf6i3LuO/+QmbAZKzaEkss5lGtML1sd0desHZIhbX/yjMRkQLAuJth/p0e+gAAAABJRU5ErkJggg==" />
                    Atrás
                </button>
            </div>
                
            <h1 className="song-title">
                {song.title}
            </h1>
            <div className="my-5">
                {song.lyric}
            </div>
        </div>
        </>
    )
}
