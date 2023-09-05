import { getSaludo } from "../../base/02-template-string"

describe("Pruebas en 02-template-string.js", ()=> {
    test("método getSaludo devolver nombre", () => {
        const nombre = "Asd"
        const saludo = getSaludo(nombre);
        expect(saludo).toBe("Hola " + nombre);
    })

    test("debe devolver Hola crack el método getSaludo sin argumento", () => {
        const saludo = getSaludo();
        expect(saludo).toBe("Hola crack")
    }) 
})