import { AuthService } from './auth.service';
import { Component } from '@angular/core';
AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';

  constructor(private _authService: AuthService){}
}
