import { useRef } from "react"

const FocusScreen = () => {
	const inputRef = useRef()

  const onClick = () => {
    inputRef.current.select()
  }

	return (
		<div>
			<h2>Focus Screen</h2>
			<hr />

			<input
        ref={inputRef}
				type='text'
				placeholder='Ingrese su nombre'
				className='form-control'
			/>

			<button type='button' onClick={onClick} className='mt-2'>
				Set Focus
			</button>
		</div>
	)
}

export default FocusScreen
