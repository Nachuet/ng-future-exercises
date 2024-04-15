import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { HabitComponent } from '../habit/habit.component'

@Component({
  selector: 'app-if',
  standalone: true,
  templateUrl: './if.component.html',
  styleUrl: './if.component.css',
  imports: [HabitComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IfComponent {
  habits = input.required<string[]>()
}
