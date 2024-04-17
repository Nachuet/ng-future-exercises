import { Component } from '@angular/core'
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrl: './router.component.css',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class RouterComponent {}
