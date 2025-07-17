import { useState } from "react"
import AddCategory from "./components/AddCategory"

const GifExpertApp = () => {
	const [categories, setCategories] = useState([])

	const handleNewValue = (newCategory) => {
		setCategories(c => [newCategory, ...(c.filter(c => c!= newCategory))])
	}

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewValue={handleNewValue} />

			<ol>
				{categories.map((c) => (
					<li key={c}>{c}</li>
				))}
			</ol>
		</>
	)
}

export default GifExpertApp
