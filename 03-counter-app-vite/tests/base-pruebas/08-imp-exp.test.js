import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id)
    const testHero = heroes.find(h => h.id == id)
    expect(hero).toEqual(testHero)
  })

  test('getHeroeById debe retornar undefined si no existe la id', () => {
    const id = 100;
    const hero = getHeroeById(id)
    expect(hero).toBeFalsy()
  })

  test('getHeroeByOwner debe retornar los heroes de DC', () => {
    const hero = getHeroesByOwner('DC')
    expect(hero.length).toBe(3)
    expect(heroes.filter( (heroe) => heroe.owner === 'DC' )).toEqual(hero)
  })

  test('getHeroeByOwner debe retornar los heroes de DC', () => {
    const hero = getHeroesByOwner('Marvel')
    expect(hero.length).toBe(2)
    expect(heroes.filter( (heroe) => heroe.owner === 'Marvel' )).toEqual(hero)
  })

})