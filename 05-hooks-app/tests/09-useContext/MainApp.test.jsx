import { describe, expect, test } from "vitest"
import { render } from "@testing-library/react"
import MainApp from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router"

describe("Pruebas en <MainApp />", () => {
	test("debe de mostrar el Home Page", () => {
		const { container } = render(<MemoryRouter>
      <MainApp />
    </MemoryRouter>)
		expect(container.innerHTML).toContain("Home Page")
	})

  test("debe de mostrar el Login Page", () => {
    const { container } = render(<MemoryRouter initialEntries={["/login"]}>
      <MainApp />
    </MemoryRouter>)
    expect(container.innerHTML).toContain("LoginPage")
  })
})
