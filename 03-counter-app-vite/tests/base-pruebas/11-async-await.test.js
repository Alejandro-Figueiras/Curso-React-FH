import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
  test("getImagen debe retornar texto", async() => {
    const respuesta = await getImagen()
    expect(typeof respuesta).toBe('string')
  })
})