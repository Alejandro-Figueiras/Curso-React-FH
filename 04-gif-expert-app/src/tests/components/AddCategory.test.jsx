import { describe, expect, test, vitest } from "vitest"
import { render, fireEvent } from '@testing-library/react';
import AddCategory from '../../components/AddCategory';

describe("Pruebas en <AddCategory />", () => {
  test("should change the value of the input", () => {
    const onNewValue = () => {};
    const { getByRole } = render(<AddCategory onNewValue={onNewValue} />)

    const input = getByRole('textbox');

    expect(input.value).toBe('');
    fireEvent.input(input, { target: { value: 'Hola Mundo' } });

    expect(input.value).toBe('Hola Mundo');
  })

  test("should not send the form if the input is empty", () => {
    const onNewValue = vitest.fn();
    const { getByRole } = render(<AddCategory onNewValue={onNewValue} />)

    const input = getByRole('textbox');
    fireEvent.submit(input);
    
    expect(onNewValue).not.toHaveBeenCalled();
  })

  test("should call onNewValue if the input has a value", () => {
    const inputValue = 'Hola Mundo';
    const onNewValue = vitest.fn();
    const { getByRole } = render(<AddCategory onNewValue={onNewValue} />)

    const input = getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(input);

    expect(onNewValue).toHaveBeenCalledWith(inputValue);
  })

  test("should clear the input after submitting", () => {
    const inputValue = 'Hola Mundo';
    const onNewValue = vitest.fn();
    const { getByRole } = render(<AddCategory onNewValue={onNewValue} />)

    const input = getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(input);

    expect(input.value).toBe('');
  })
})
