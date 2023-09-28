import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../base/data/heroes";

describe("Pruebas con promesas", () => {

    test("Debe de retornar un heroe async", ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toEqual(heroes[0]);
            done();
        })
    })

    test("debe de obtener un error si el heroe por id no existe", (done) => {

        const id = 10;
        getHeroeByIdAsync(id).then().catch((error = '') => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    })

})