import { AppRouter } from "./router/AppRouter"
import { Navbar } from './layout';


export const Cancionero = () => {
    return (
        <>
            <div className="bg-primary">
                <Navbar />
            </div>
            <AppRouter />
        </>
    )
}