import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'esHoy',
  standalone: true,
})
export class esHoyPipe implements PipeTransform {
  transform(value: Date): string {
    console.log(value)
    if (value.toDateString() === new Date().toDateString()) {
      console.log(1)
      return 'La fecha es hoy'
    } else {
      console.log(2)
      return 'La fecha no es hoy'
    }
  }
}
