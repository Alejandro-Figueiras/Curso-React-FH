import { renderHook, act} from '@testing-library/react'
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

  test('debe tener el valor inicial', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter } = result.current
    expect(counter).toBe(100)
  })

  test('debe incrementar el contador', () => {
    const { result } = renderHook(() => useCounter())
    const { increment } = result.current

    act(() => {
      increment()
      increment(2)
    })
    const { counter } = result.current

    expect(counter).toBe(3)
  })

  test('debe decrementar el contador', () => {
    const { result } = renderHook(() => useCounter())
    const { decrement } = result.current

    act(() => {
      decrement()
      decrement(2)
    })
    const { counter } = result.current

    expect(counter).toBe(-3)
  })

  test('debe reiniciar el contador', () => {
    const { result } = renderHook(() => useCounter(100))
    const { reset, increment, counter } = result.current

    act(() => {
      increment()
      reset()
    })

    expect(counter).toBe(100)
  })

})