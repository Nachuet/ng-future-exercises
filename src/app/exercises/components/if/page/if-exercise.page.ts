import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { IfSolutionComponent } from '../_solution/if.component'
import { IfComponent } from '../if.component'

@Component({
  selector: 'app-if-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement src="assets/app/exercises/components/if/README.md" />
      <app-if-solution solution [habits]="HayElementos" />
      <app-if user-solution [habits]="HayElementos" />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, IfSolutionComponent, IfComponent],
})
export class IfExercisePage {
  NoHayElementos: string[] = []
  HayElementos: string[] = ['Dormir', 'Comer', 'Hacer ejercicio', 'Leer']
}
