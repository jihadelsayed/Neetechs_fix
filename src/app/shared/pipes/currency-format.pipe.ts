import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currency: string = 'USD', display: string = 'symbol', digitsInfo: string = '1.2-2'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: Number(digitsInfo.split('-')[0]),
      maximumFractionDigits: Number(digitsInfo.split('-')[1]),
    }).format(value);
  }

}
