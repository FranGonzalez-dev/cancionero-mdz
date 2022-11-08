import { Link } from "react-router-dom"

export const Home = () => {
    return (
    <div className="container mt-5 animate__animated animate__fadeIn">
    
        <div className="my-4 bg-white p-4 shadow">
            <h1>Hola</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam, amet velit dicta minus fugit corporis facere consequatur eveniet qui obcaecati facilis cumque quae error dolor ratione. Tempora, a impedit.</p>
        </div>
        <div className="grid">
            <Link to='/' className="item">
                Setlist
            </Link>
            <Link to='/alabanzas' className="item">
                Alabanzas
            </Link>
            <Link to='/adoraciones' className="item">
                Adoraciones
            </Link>
        </div>
        
    </div>
    )
}
