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
        <div className="container my-4 bg-white p-5 shadow">
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
