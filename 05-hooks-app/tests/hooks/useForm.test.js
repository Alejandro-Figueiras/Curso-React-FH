import { renderHook, act } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useForm } from '../../src/hooks/useForm';

describe("pruebas en el customHook useForm", () => {
  const initialForm = {
    name: "Alejandro",
    email: "asd@gmail.com"
  }

  test("debe regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: "Alejandro",
      email: "asd@gmail.com",
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    });
  });

  test("debe cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "Juan" } });
    });

    expect(result.current.name).toBe("Juan");
    expect(result.current.formState.name).toBe("Juan");
  });

  test("debe cambiar el email del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "email", value: "asd@gmail.com" } });
    });
    expect(result.current.email).toBe("asd@gmail.com");
    expect(result.current.formState.email).toBe("asd@gmail.com");
  });

  test("debe reiniciar el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "Juan" } });
      onInputChange({ target: { name: "email", value: "asd@gmail.com" } });
      onResetForm();
    });
    expect(result.current.name).toBe("Alejandro");
    expect(result.current.email).toBe("asd@gmail.com");
    expect(result.current.formState).toEqual(initialForm);
  });
})