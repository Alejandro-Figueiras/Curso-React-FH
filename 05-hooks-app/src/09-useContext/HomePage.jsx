import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const HomePage = () => {
	const { user } = useContext(UserContext)

	return <div>
    <h3>Home Page</h3>
    <pre>{JSON.stringify(user, null, 2)}</pre>
  </div>
}

export default HomePage
