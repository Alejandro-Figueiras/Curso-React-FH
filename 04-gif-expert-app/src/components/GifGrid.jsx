import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import GifItem from "./GifItem"

const GifGrid = ({ category }) => {
	const [images, setImages] = useState([])

	useEffect(() => {
		getGifs(category).then((gifs) => {
			setImages(gifs)
		})
	}, [category])

	return (
		<div>
			<h3>{category}</h3>

			<div className='card-grid'>
				{images.map((img) => (
					<GifItem key={img.id} {...img} />
				))}
			</div>
		</div>
	)
}

export default GifGrid
