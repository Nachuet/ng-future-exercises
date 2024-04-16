import { Component } from '@angular/core'

/*
interface Post  {
  userId : number,
  id : number, 
  title : string,
  body : string
}*/

@Component({
  selector: 'app-http-client',
  standalone: true,
  templateUrl: './http-client.component.html',
})
export class HttpClientComponent {
  getPosts() {}
  createPost() {}
  getError() {}
}
