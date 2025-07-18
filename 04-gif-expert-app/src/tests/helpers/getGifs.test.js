import { getGifs } from '../../helpers/getGifs'
import { describe, test, expect } from 'vitest'

describe('Pruebas en el helper getGifs', () => {

  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBeGreaterThan(0);
  });

  test('debe de retornar un arreglo con objetos que contengan las propiedades id, title y url', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs[0]).toHaveProperty('id');
    expect(gifs[0]).toHaveProperty('title');
    expect(gifs[0]).toHaveProperty('url');
  });
})    