import { Component, signal, computed } from '@angular/core'

@Component({
  selector: 'app-signals-computed',
  templateUrl: './signals-computed.component.html',
  styleUrl: './signals-computed.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComputedComponent {
  value = signal(0)
  doble = computed(() => this.value() * 2)
  dobledoble = computed(() => this.doble() * 2)

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
