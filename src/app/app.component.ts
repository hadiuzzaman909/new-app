import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { GoogleLoginComponent } from './google-login/google-login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FacebookLoginComponent,GoogleLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'new-app';
}
