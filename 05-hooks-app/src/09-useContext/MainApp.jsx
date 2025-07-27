import { Navigate, Route, Routes } from "react-router"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import LoginPage from "./LoginPage"
import Navbar from "./Navbar"

const MainApp = () => {
	return (
		<>
			<Navbar />
			<hr />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='about' element={<LoginPage />} />
				<Route path='login' element={<AboutPage />} />

				<Route path='/*' element={<Navigate to='/' />} />
			</Routes>
		</>
	)
}

export default MainApp
