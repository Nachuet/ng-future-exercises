import { Component, output } from '@angular/core'

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.css',
  standalone: true,
  imports: [],
})
export class OutputChildComponent {
  onNameChange = output<number>()
  numero = 0

  increase() {
    this.numero++
    this.onNameChange.emit(this.numero)
  }
  decrease() {
    this.numero--
    this.onNameChange.emit(this.numero)
  }
}
