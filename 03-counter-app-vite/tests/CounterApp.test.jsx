import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from "../src/CounterApp"

describe("Pruebas en CounterApp", () => {
	test("should match with the snapshot", () => {
		const { container } = render(<CounterApp />)
		expect(container).toMatchSnapshot()
	})

	test("should show the value at 100", async() => {
		render(<CounterApp value={100} />)
		expect(await screen.findByText("100")).toBeTruthy()
	})

	test("should increase the counter by pressing the button +1", async() => {
		render(<CounterApp value={43} />)
		fireEvent.click(screen.getByText("+1"))

		expect(await screen.findByText("44")).toBeTruthy()
	})

	test("should decrease the counter by pressing the button -1", async() => {
		render(<CounterApp value={43} />)
		fireEvent.click(screen.getByText("-1"))
		expect(await screen.findByText("42")).toBeTruthy()
	})
  
  test("should reset the counter by pressing the button reset", async() => {
    render(<CounterApp value={43} />)
    fireEvent.click(screen.getByText("-1"))
		fireEvent.click(screen.getByText("Reset"))
		expect(await screen.findByText("43")).toBeTruthy()
	})
})
