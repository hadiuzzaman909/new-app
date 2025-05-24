// src/app/google-login.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-google-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {
  user: SocialUser | null = null;
  loggedIn = false;
  private accessToken = '';

  constructor(
    private authService: SocialAuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = !!user;
      if (this.loggedIn) {
        this.getAccessToken();
      }
    });
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut() {
    this.authService.signOut();
    this.accessToken = '';
  }

  private async getAccessToken() {
    try {
      this.accessToken = await this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID);
      console.log('Access token:', this.accessToken);
    } catch (err) {
      console.error('Token error', err);
    }
  }

  getGoogleCalendarData() {
    if (!this.accessToken) {
      console.warn('No access token yet');
      return;
    }

    this.http
      .get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        headers: { Authorization: `Bearer ${this.accessToken}` }
      })
      .subscribe({
        next: events => console.log('Calendar events:', events),
        error: err => console.error('Calendar API error', err)
      });
  }
}
