import { Component } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// First, we check isLoggedIn status using StorageService, 
// if it is true, we get user’s roles and set value for showAdminBoard & showModeratorBoard flag. 
// They will control how template navbar displays its items.
// The App Component template also has a Logout button link that call logout() method and reload the window.

export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
 
  constructor(private storageService: StorageService, private authService: AuthService) { }
 
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
 
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
 
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
 
      this.username = user.username;
    }
  }
 
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
 
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
