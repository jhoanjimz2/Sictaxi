
export class StringFilter {
  /**
   * Método que verifica si una cadena es numérica (solo números)
   * @param input - La cadena a validar
   * @returns boolean
   */
  static esNumerica(input: string): boolean {
    const numericoRegex = /^[0-9]+$/;
    return numericoRegex.test(input);
  }

  /**
   * Método que verifica si una cadena es alfanumérica (letras y números)
   * @param input - La cadena a validar
   * @returns boolean
   */
  static esAlfanumerica(input: string): boolean {
    const alfanumericoRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]+$/;
    return alfanumericoRegex.test(input);
  }
}
