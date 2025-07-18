import { describe, expect, test } from "vitest"
import { render } from '@testing-library/react';
import GifItem from '../../components/GifItem';

describe("Pruebas en <GifItem />", () => {
  const title = 'Hola';
  const url = 'https://localhost/algo.jpg';

	test("should match the snapshot", () => {
    const {container} = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot();
  })

  test("should show the image with the URL and ALT of the GIF", () => {
    const { getByRole } = render(<GifItem title={title} url={url} />)

    const { src, alt } = getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  })
})
