import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyFormatService {

  constructor() { }

  formatCurrency(value: number) {
    // Formatea el valor como moneda con dos decimales
    const formattedValue = value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Si termina en ".00", elimina los decimales
    return formattedValue.replace(/\.00$/, '');
  }
}
