import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en el archivo 02-template-string', () => {

  test('getSaludo debe de retordar "Hola, Fernando"', () => {
    const name = 'Fernando'
    const message = getSaludo(name)
    expect(message).toBe(`Hola ${name}`)
  })

})