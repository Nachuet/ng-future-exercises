import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComponent {
  value = signal(0)

  decrease() {
    this.value.update(value => value - 1)
  }

  increase() {
    this.value.update(value => value + 1)
  }

  reset() {
    this.value.set(0)
  }
}
