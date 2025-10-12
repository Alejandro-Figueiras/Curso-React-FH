import { Navigate, Route, Routes } from "react-router"
import { Navbar } from "../../ui/components/Navbar"
import MarvelPage from "../pages/MarvelPage"
import DcPage from "../pages/DcPage"

const HeroesRoutes = () => {
	return (
		<>
			<Navbar />

			<div className='container'>
				<Routes>
					<Route path='marvel' element={<MarvelPage />} />
					<Route path='dc' element={<DcPage />} />

					<Route path='/*' element={<Navigate to='/marvel' />} />
				</Routes>
			</div>
		</>
	)
}

export default HeroesRoutes
