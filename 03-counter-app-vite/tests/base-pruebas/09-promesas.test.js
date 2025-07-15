import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe('Pruebas en 09-promesas', () => {
  test("getHeroeByIdAsync debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then(hero => {
      const testHero = heroes.find(h => h.id == id)
      expect(hero).toEqual(testHero)
      done()
    })
  })

  test("getHeroeByIdAsync debe obtener un error si heroe no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el héroe')
      done()
    })
  })
})