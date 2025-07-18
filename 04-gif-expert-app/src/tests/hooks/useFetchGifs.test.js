import { describe, expect, test } from "vitest"
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test("should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  })

  test("should return an array of images and isLoading false", async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  })

})