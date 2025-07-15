// 1. Inicializacion
// 2. Estimulo
// 3. Observar el comportamiento


describe('Pruebas Demo', () => {


  test('should not fail', () => {
    const message1 = 'Hola Mundo'
    const message2 = message1.trim()
    expect(message1).toBe(message2)
  })


})