import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//   id: 123,
//   name: 'Alejandro',
//   email: "alejandro@asd.com"
// }

const UserProvider = ({ children }) => {
	const [user, setUser] = useState()

	return (
		<UserContext.Provider
			value={{
				hola: "mundo",
				user,
				setUser,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
