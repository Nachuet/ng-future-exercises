import { Component } from '@angular/core'

@Component({
  selector: 'app-hello-world',
  standalone: true,
  styles: [
    `
      .tittle {
        color: var(--primary-color);
      }
    `,
  ],
  template: `<h1 class="tittle">Hola Mundo</h1>`,
})
export class HelloWorldComponent {}
