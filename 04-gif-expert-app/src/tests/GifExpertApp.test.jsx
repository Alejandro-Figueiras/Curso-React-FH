import { describe, expect, test, vitest } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import GifExpertApp from "../GifExpertApp"
import { useFetchGifs } from "../hooks/useFetchGifs"

vitest.mock("../hooks/useFetchGifs")

describe("Pruebas en <GifExpertApp />", () => {
	test("should add a new category when the form is submitted", async () => {
		const gifs = [
			{ id: "1", title: "Gif 1", url: "http://example.com/gif1.gif" },
			{ id: "2", title: "Gif 2", url: "http://example.com/gif2.gif" },
		]

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		})
		const { getByRole, getByText } = render(<GifExpertApp />)

		const input = getByRole("textbox")

		fireEvent.input(input, { target: { value: "Dragon Ball" } })
		fireEvent.submit(input)

		expect(getByText("Dragon Ball")).toBeTruthy()
	})
})
