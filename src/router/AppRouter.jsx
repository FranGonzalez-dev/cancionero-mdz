import { Route, Routes } from 'react-router-dom';
import { Alabanzas, Adoraciones, Cancion, Home } from '../app/pages';


export const AppRouter = () => {
  	return (
		<div className='px-4'>
		
			<Routes>
				<Route path='/' element={ <Home/> }/>
				<Route path='/adoraciones' element={ <Adoraciones/> } />
				<Route path='/alabanzas' element={ <Alabanzas/> }/>
				<Route path='/cancion/:id' element={ <Cancion/> }/>
				<Route path='/*' element={ <Home/> }/>
			</Routes>
		</div>
  	)
}
