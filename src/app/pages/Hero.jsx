import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../helpers";


export const Hero = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const onReturn = () => navigate(-1)


    const hero = useMemo( () => getHeroById( id ), [ id ]) ;
    
    if ( !hero ) return <Navigate to='/' />
    
    const heroImg = `/assets/heroes/${ id }.jpg`;


    return (
        <div className="row mt-5 animate__animated animate__fadeIn">
            <div className="col-4">
                <img src={ heroImg } alt={ hero.superhero } className="img-thumbnail"/>
            </div>
            <div className="col-8">
                <h1> {hero.superhero} </h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> {hero.alter_ego} </li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher} </li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance} </li>
                </ul>
                <h2 className="mt-3">Characters</h2>
                <p>{ hero.characters }</p>

                <button className="btn btn-outline-primary" onClick={ onReturn }>
                    Regresar
                </button>
            </div>
        </div>
    )
}
