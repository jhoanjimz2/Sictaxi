import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Mensajes de error personalizados
    const errorMessages = {
      required:        'El campo es obligatorio.',
      invalidFormat:   'El formato de la fecha debe ser YYYY/MM/DD.' ,
      invalidDate:     'La fecha ingresada no es válida.',
    };

    // Validar si el campo está vacío (requerido)
    if (!value) {
      return { required: errorMessages.required };
    }

    // Validar si el formato es correcto: YYYY/MM/DD
    const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!datePattern.test(value)) {
      return { invalidFormat: errorMessages.invalidFormat  };
    }

    // Validar si la fecha es válida
    const [year, month, day] = value.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    if (
      date.getFullYear() !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day
    ) {
      return { invalidDate: errorMessages.invalidDate };
    }

    return null; // Todo está correcto
  };
}

export function dateExpiredValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    const errorMessages = {
      required:        'El campo es obligatorio.',
      invalidFormat:   'El formato de la fecha debe ser YYYY/MM/DD.' ,
      invalidDate:     'Por favor, ingrese una fecha válida.',
      dateExpired:     'Documento con fecha vencida.',
    };

    // Validar que el campo es requerido
    if (!value) {
      return { required: errorMessages.required };
    }
    // Validar formato de fecha (YYYY/MM/DD)
    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!dateRegex.test(value)) {
      return { invalidFormat: errorMessages.invalidFormat };
    }

    // Validar que sea una fecha válida
    const dateParts = value.split('/').map(Number);
    const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    if ( date.getFullYear() !== dateParts[0] || date.getMonth() !== dateParts[1] - 1 || date.getDate() !== dateParts[2] ) {
      return { invalidDate: errorMessages.invalidDate };
    }

    // Validar que no esté vencida
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Eliminar la parte de tiempo
    if (date < today) {
      return { dateExpired: errorMessages.dateExpired };
    }

    return null;
  };
}
export function datesExpVenValidator(controlName1: string, controlName2: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const control1 = group.get(controlName1); // fechaInicio
    const control2 = group.get(controlName2); // fechaFin

    if (!control1 || !control2) {
      return null; // Si no existen los controles, no hacer validación
    }

    const date1 = control1.value ? new Date(control1.value) : null;
    const date2 = control2.value ? new Date(control2.value) : null;

    // Verificar si ambas fechas son válidas
    if (!date1 || !date2 || isNaN(date1.getTime()) || isNaN(date2.getTime())) {
      return null; // No se valida si las fechas no están completas o son inválidas
    }

    // Si la fecha de inicio es mayor o igual que la fecha de fin
    if (date1 >= date2) {
      if (control1.dirty || control1.touched) {
        // Si la fecha de inicio fue modificada y es mayor o igual que la fecha de fin, poner el error en la fecha de inicio
        control1.setErrors({ dateGreaterThan: 'La fecha de exp. debe ser menor que la fecha de venc.' });
      } else if (control2.dirty || control2.touched) {
        // Si la fecha de fin fue modificada y es menor o igual que la fecha de inicio, poner el error en la fecha de fin
        control2.setErrors({ dateGreaterThan: 'La fecha de venc. debe ser mayor que la fecha de exp.' });
      }
      return { dateGreaterThan: 'La fecha de exp. debe ser menor que la fecha de venc.' };
    }

    // Eliminar el error si las fechas son válidas
    if (control1.errors?.['dateGreaterThan']) {
      control1.setErrors(null); // Eliminar error de fecha de inicio si es válido
    }
    if (control2.errors?.['dateGreaterThan']) {
      control2.setErrors(null); // Eliminar error de fecha de fin si es válido
    }

    return null;
  };
}


export function validatorPatterns(pattern: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';

    // Validar si el campo está vacío (equivalente a Validators.required)
    if (!value.trim()) {
      return { required: 'El campo es obligatorio.' };
    }

    // Validar si contiene solo caracteres alfanuméricos
    const regex = new RegExp(pattern);
    if (!regex.test(value)) {

      switch (pattern) {
        case '^[0-9a-zA-Z]+$':
          return { pattern: 'Solo se permiten datos alfanuméricos.' };
        break;
        case '^[0-9]+$':
          return { pattern: 'Solo se permiten números.' };
        break;
      }

    }

    return null; // Es válido
  };
}
