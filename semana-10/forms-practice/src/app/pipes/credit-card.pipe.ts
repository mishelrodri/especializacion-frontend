import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string): string {
    // Elimina todos los espacios en blanco y guiones del número de tarjeta de crédito
    value = value.replace(/\s+/g, '').replace(/-/g, '');

    // Divide el número de tarjeta de crédito en grupos de cuatro dígitos separados por guiones
    const matches = value.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    // Une los grupos de cuatro dígitos con guiones y devuelve el resultado
    if (parts.length > 0) {
      return parts.join(' ');
    } else {
      return value;
    }
  }

}
