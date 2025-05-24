import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-google-login',
  imports: [CommonModule],
  templateUrl: './google-login.component.html',
  styleUrl: './google-login.component.scss'
})
export class GoogleLoginComponent {
  user: SocialUser | null = null;
  loggedIn = false;

  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = !!user;
      console.log('Google User:',this.user)
    });
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
  }

  signOut() {
    this.authService.signOut();
  }
}
