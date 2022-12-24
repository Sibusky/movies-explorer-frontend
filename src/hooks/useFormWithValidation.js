import { useCallback, useState } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Регулярное выражение для валидации имени
  const regExp = /^(?!\s)[A-Za-zА-Яа-я\-\s]+$/;

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());

    // Валидирую поле "name" на латинские, кириллические символы, пробел и тире
    if (name === 'name') {
      if (!regExp.test(value)) {
        setErrors({
          ...errors,
          name: 'Name must contain olny Latin or Cyrillic characters, spaces or symbol "-" and must not start with',
        });
        return setIsValid(false);
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return [values, errors, isValid, handleChange, resetForm];
}
