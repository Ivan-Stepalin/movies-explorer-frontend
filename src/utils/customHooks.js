import { useState, useEffect, useCallback } from 'react';

export function useFormWithValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());
    };

    const resetForm = useCallback(

        (newValues = {name: 'qwer'}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm, setValues };
}

export function useWindowWidthSettings() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleSizeWidth = () => setWindowWidth(window.innerWidth);

        if (windowWidth) {
            window.addEventListener('resize', handleSizeWidth);
            return () => window.removeEventListener('resize', handleSizeWidth);
        }
    }, [windowWidth]);

    return windowWidth;
}
