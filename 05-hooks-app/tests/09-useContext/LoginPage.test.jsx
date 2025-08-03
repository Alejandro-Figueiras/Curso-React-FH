import { describe, expect, test, vitest } from "vitest"
import { render } from "@testing-library/react"
import LoginPage from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe("Pruebas en <LoginPage />", () => {
  test("debe de mostrar el componente sin el usuario", () => {
    const { container } = render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    )
    expect(container.innerHTML).toContain("No hay usuario")
  })

  test("debe de mostrar el usuario cuando se establece al clickear el boton", () => {
    const setUser = vitest.fn()
    const { getByText } = render(
      <UserContext.Provider value={{ user: null, setUser }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const button = getByText("Establecer usuario")
    button.click()

    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: "Alejandro",
      email: "alejandro@asd.com",
    })
  })
})