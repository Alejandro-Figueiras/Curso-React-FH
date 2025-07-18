import { describe, expect, test, vitest } from "vitest"
import { render } from "@testing-library/react"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"

vitest.mock("../../hooks/useFetchGifs")

describe("Pruebas en <GifGrid />", () => {
	test("should show loading initially", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })
		const { getByText } = render(<GifGrid category='Test Category' />)


		expect(getByText("Cargando...")).toBeTruthy()
	})

	test("should display items when images are loaded from useFetchGifs", () => {
		const gifs = [
			{ id: "1", title: "Gif 1", url: "http://example.com/gif1.gif" },
			{ id: "2", title: "Gif 2", url: "http://example.com/gif2.gif" },
		]

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		})

		const { getByText, getAllByRole } = render(<GifGrid category='Test Category' />)

		expect(getByText("Gif 1")).toBeTruthy()
		expect(getByText("Gif 2")).toBeTruthy()
    expect(getAllByRole("img").length).toBe(2)
	})
})
