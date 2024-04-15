import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-attribute-binding',
  standalone: true,
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttributeBindingComponent {
  text = input.required<string>()

  getTittle() {
    return this.text().length > 5 ? 'hola mundo' : ''
  }

  // importante, estamos devolviendo los estilos, es un array con varios estilos y una condicion true/false
  // para que se apliquen
  getStyleClass() {
    return {
      'begin-with-a': this.text().toLowerCase().startsWith('a'),
      'more-than-five': this.text().length > 5,
    }
  }
}
