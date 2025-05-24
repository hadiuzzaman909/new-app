import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FacebookLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'new-app';
}
