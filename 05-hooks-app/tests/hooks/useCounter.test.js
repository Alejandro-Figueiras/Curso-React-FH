import { renderHook } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { useCounter } from '../../src/hooks/useCounter'

describe('pruebas en useCounter', () => {
  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    const {counter, increment, decrement, reset } = result.current
    expect(counter).toBe(0)
    expect(increment).toEqual(expect.any(Function))
    expect(decrement).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  

})