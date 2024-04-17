import { Component } from '@angular/core'
import { OutputChildComponent } from './output-child/output-child.component'

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.css',
  standalone: true,
  imports: [OutputChildComponent],
})
export class OutputParentComponent {
  value: number | undefined
  handleNameChange(event: number) {
    this.value = event
  }
}
