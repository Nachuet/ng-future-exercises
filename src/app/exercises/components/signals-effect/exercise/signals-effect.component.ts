import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-signals-effect',
  templateUrl: './signals-effect.component.html',
  styleUrl: './signals-effect.component.css',
  standalone: true,
  imports: [],
})
export class SignalsEffectComponent {
  value = signal(0)

  decrease() {
    this.value.update(x => x - 1)
  }
  increase() {
    this.value.update(x => x + 1)
  }
}
