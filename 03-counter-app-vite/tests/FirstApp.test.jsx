import {render } from '@testing-library/react'
import FirstApp from '../src/FirstApp'

describe("Pruebas en FirstApp", () => {
	// test("debe de hacer match con el snapshot", () => {
  //   const { container } = render(<FirstApp title={"Hola"}/>)
  //   expect(container).toMatchSnapshot();
  // })

  test("debe mostrar el titulo en un h1", () => {
    const { container, getByText, getByTestId } = render(<FirstApp title={"Hola"}/>)
    expect( getByText('Hola') ).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toContain('Hola')

    expect(getByTestId('test-title').innerHTML).toBe('Hola')
  })
})
