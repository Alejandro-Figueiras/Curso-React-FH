import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const LoginPage = () => {
	const { user, setUser } = useContext(UserContext)

	return (
		<div>
			<h2>LoginPage</h2>
			<hr />
			<pre>{user ? JSON.stringify(user, null, 2): 'No hay usuario'}</pre>

			<button
				onClick={() => {
					setUser({
						id: 123,
						name: "Alejandro",
						email: "alejandro@asd.com",
					})
				}}
			>
				Establecer usuario
			</button>
		</div>
	)
}

export default LoginPage
