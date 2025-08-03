import { describe, expect, test } from "vitest"
import { render } from "@testing-library/react"
import HomePage from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe("Pruebas en <HomePage />", () => {
	test("debe de mostrar el componente HomePage correctamente", () => {
		const { container } = render(
			<UserContext.Provider value={{ user: { id: 123, name: "Alejandro", email: "asd@gmail.com" } }}>
				<HomePage />
			</UserContext.Provider>
		)
		expect(container.innerHTML).toContain("Alejandro")
    expect(container.innerHTML).toContain("asd@gmail.com")
    expect(container.innerHTML).toContain("123")
	})

  test("debe de mostrar un usuario vacío si no hay contexto", () => {
    const { container } = render(
      <UserContext.Provider value={{ user: {} }}>
        <HomePage />
      </UserContext.Provider>
    )
    expect(container.innerHTML).toContain("{}")
  })
})
