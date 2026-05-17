import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function requiredValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    // Si el valor está vacío (null, undefined, o string vacío)
    const isInvalid = value === null || value === undefined || value === 'undefined' || value === 'Undefined' || value === '';
    return isInvalid ? { required: 'El campo es obligatorio.' } : null;
  };
}
export function checkboxRequiredValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === true) {
      return null; // Sin errores
    }
    return { requiredCheckbox: 'Debes aceptar los términos y condiciones' };
  };
}
export function checkboxRequiredValidator2(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === true) {
      return null; // Sin errores
    }
    return { requiredCheckbox: 'Debes aceptar las politicas de privacidad y tratamientos de datos' };
  };
}
export function requiredAndEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Verificar si el valor está vacío
    if (!value || value.trim() === '') {
      return { required: 'Este campo es obligatorio.' };
    }

    // Verificar si el valor tiene formato de email válido
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      return { email: 'El formato del correo electrónico no es válido.' };
    }

    // Si pasa ambas validaciones, es válido
    return null;
  };
}

export function validFecha(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return { required: 'Este campo es obligatorio.' };
    }

    // Expresión regular para formato YYYY/MM/DD
    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;

    if (!dateRegex.test(value)) {
      return { invalidDateFormat: 'El formato de la fecha debe ser YYYY/MM/DD' };
    }

    // Verificar si la fecha es válida
    const [year, month, day] = value.split('/').map(Number);

    // Crear una fecha para validarla
    const date = new Date(year, month - 1, day);

    // Verificar que la fecha sea válida
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return { invalidDate: 'La fecha ingresada no es válida' };
    }

    return null; // La fecha es válida y cumple con el formato
  };
}

export function validFechaNacimiento(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return { required: 'Este campo es obligatorio.' };
    }

    // Expresión regular para formato YYYY/MM/DD
    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;

    if (!dateRegex.test(value)) {
      return { invalidDateFormat: 'El formato de la fecha debe ser YYYY/MM/DD' };
    }

    // Verificar si la fecha es válida
    const [year, month, day] = value.split('/').map(Number);

    // Crear una fecha para validarla
    const date = new Date(year, month - 1, day);

    // Verificar que la fecha sea válida
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return { invalidDate: 'La fecha ingresada no es válida' };
    }

    // Crear una fecha con el valor proporcionado
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    // Calcular la diferencia de años
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();

    // Si el mes actual es menor que el mes de nacimiento, restamos un año
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    // Verificar si la edad es menor que la edad mínima
    if (age < 18) {
      return { dateNotGreaterThanToday: 'Debe tener al menos 18 años' };
    }

    return null; // La fecha es válida y cumple con el formato
  };
}

export function validFechaActualMayor(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return { required: 'Este campo es obligatorio.' };
    }

    // Expresión regular para formato YYYY/MM/DD
    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;


    if (!dateRegex.test(value)) {
      return { invalidDateFormat: 'El formato de la fecha debe ser YYYY/MM/DD' };
    }

    // Verificar si la fecha es válida
    const [year, month, day] = value.split('/').map(Number);

    // Crear una fecha para validarla
    const date = new Date(year, month - 1, day);

    // Verificar que la fecha sea válida
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return { invalidDate: 'La fecha ingresada no es válida' };
    }

    // Verificar que la fecha sea mayor al día actual
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Asegurarse de que solo se compare la fecha (sin hora)

    if (date <= currentDate) {
      return { dateNotGreaterThanToday: 'La fecha debe ser mayor a la fecha actual' };
    }

    return null; // La fecha es válida y cumple con el formato
  };
}
export function validFechaActualMenor(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return { required: 'Este campo es obligatorio.' };
    }

    // Expresión regular para formato YYYY/MM/DD
    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;


    if (!dateRegex.test(value)) {
      return { invalidDateFormat: 'El formato de la fecha debe ser YYYY/MM/DD' };
    }

    // Verificar si la fecha es válida
    const [year, month, day] = value.split('/').map(Number);

    // Crear una fecha para validarla
    const date = new Date(year, month - 1, day);

    // Verificar que la fecha sea válida
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return { invalidDate: 'La fecha ingresada no es válida' };
    }

    // Verificar que la fecha sea mayor al día actual
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Asegurarse de que solo se compare la fecha (sin hora)

    if (date > currentDate) {
      return { dateNotGreaterThanToday: 'La fecha debe ser menor o igual a la fecha actual' };
    }

    return null; // La fecha es válida y cumple con el formato
  };
}

export function numeroEnteroValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value;

    if (valor === null || valor === undefined || valor === '') {
      return { required: 'El campo es obligatorio.' }; // Permite valores vacíos
    }

    if (typeof valor !== 'number' || isNaN(valor)) {
      return { numeroInvalido: 'El valor ingresado no es un número válido.' };
    }

    if (!Number.isInteger(valor)) {
      return { noEntero: 'El número no debe tener decimales.' };
    }

    if (valor <= 0) {
      return { menorQueCero: 'El número no puede ser menor o igual a cero.' };
    }

    return null; // Válido
  };
}



export function endDateValidator(startDateControlName: string, endDateControlName: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const startDateControl = group.get(startDateControlName);
    const endDateControl = group.get(endDateControlName);

    if (!startDateControl || !endDateControl) {
      return {
        controlsNotFound: 'Los controles de fecha no se encontraron en el formulario.'
      };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Limpiar horas, minutos y segundos

    const startDate = new Date(startDateControl.value);
    const endDate = new Date(endDateControl.value);

    const errors: ValidationErrors = {};

    // Validar que la fecha final sea válida
    if (!endDateControl.value || isNaN(endDate.getTime())) {
      errors['endDateInvalid'] = 'La fecha de ven. no es válida.';
    }

    // Validar que la fecha final no sea anterior a hoy
    if (endDateControl.value && endDate < today) {
      errors['endDatePast'] = 'La fecha de ven. no puede ser anterior a hoy.';
    }

    // Validar que la fecha final no sea anterior a la fecha de inicio
    if (startDateControl.value && endDateControl.value && endDate < startDate) {
      errors['endDateBeforeStart'] = 'La fecha de ven. no puede ser anterior a la de exp.';
    }

    // Asignar errores al control de la fecha final
    endDateControl.setErrors(Object.keys(errors).length ? errors : null);

    return Object.keys(errors).length ? errors : null;
  };
}

export function placaValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Verificar si el valor está vacío
    const isEmpty = value === null || value === undefined || value === 'undefined' || value === 'Undefined' || value === '';
    if (isEmpty) {
      return { required: 'El campo es obligatorio.' };
    }

    // Verificar si el valor cumple con el patrón
    const pattern = /^[A-Za-z]{3}\d{3}$/; // 3 letras seguidas de 3 números
    const isValidPattern = pattern.test(value);

    if (!isValidPattern) {
      return { customPattern: 'Debe tener 3 letras seguidas de 3 números.' };
    }

    // Si pasa ambas validaciones, retorna null
    return null;
  };
}
