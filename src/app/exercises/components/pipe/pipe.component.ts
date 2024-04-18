import { DatePipe } from '@angular/common'
import { Component } from '@angular/core'
import { esHoyPipe } from './is-today.pipe'

@Component({
  selector: 'app-pipe',
  standalone: true,
  template: `
    <div>{{ today | date }}</div>
    <div>{{ today | date: 'dd-mm-yyyy' }}</div>
    <div>{{ today | date: 'yyyy-mm-dd' }}</div>
    <div>{{ today | esHoy }}</div>
    <div>{{ yesterday | esHoy }}</div>
  `,
  styles: ``,
  imports: [DatePipe, esHoyPipe],
})
export class PipeComponent {
  today = new Date()
  yesterday = new Date(new Date().setDate(this.today.getDate() - 1))
}
