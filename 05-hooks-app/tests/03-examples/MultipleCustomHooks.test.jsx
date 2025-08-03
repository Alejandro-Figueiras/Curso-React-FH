import { beforeEach, describe, expect, test, vitest } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

vitest.mock("../../src/hooks/useFetch")
vitest.mock("../../src/hooks/useCounter")

describe("Pruebas en <MultipleCustomHooks />", () => {
	const mockIncrement = vitest.fn()
	const mockDecrement = vitest.fn()
	useCounter.mockReturnValue({
		counter: 1,
		increment: mockIncrement,
    decrement: mockDecrement
	})

  beforeEach(() => {
    vitest.clearAllMocks()
  })

	test("debe de mostrar el componente por defecto", () => {
		useFetch.mockReturnValue({
			data: null,
			isLoading: true,
		})
		const { getByText } = render(<MultipleCustomHooks />)
		expect(getByText("Cargando...")).toBeTruthy()
		expect(getByText("Información del Pokemon")).toBeTruthy()
		expect(getByText("Anterior")).toBeTruthy()
		expect(getByText("Siguiente")).toBeTruthy()
	})

	test("debe de mostrar un Pokemon específico", () => {
		useFetch.mockReturnValue({
			data: {
				id: 1,
				name: "bulbasaur",
				sprites: {
					front_default: "https://example.com/front_default.png",
					front_shiny: "https://example.com/front_shiny.png",
					back_default: "https://example.com/back_default.png",
					back_shiny: "https://example.com/back_shiny.png",
				},
			},
			isLoading: false,
		})
		const { getByText } = render(<MultipleCustomHooks />)
		expect(getByText("#1: bulbasaur")).toBeTruthy()
	})

	test("debe de incrementar el contador", () => {
		useFetch.mockReturnValue({
			data: {
				id: 1,
				name: "bulbasaur",
				sprites: {
					front_default: "https://example.com/front_default.png",
					front_shiny: "https://example.com/front_shiny.png",
					back_default: "https://example.com/back_default.png",
					back_shiny: "https://example.com/back_shiny.png",
				},
			},
			isLoading: false,
		})

		const { getByText } = render(<MultipleCustomHooks />)
		const nextButton = getByText("Siguiente")

		fireEvent.click(nextButton)
		expect(mockIncrement).toHaveBeenCalled()
	})
})
