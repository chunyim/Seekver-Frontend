import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Input() showAdminBoard: boolean = false;
  @Input() showModeratorBoard: boolean = false;
  @Input() isLoggedIn: boolean = false;
  @Output() logoutClicked = new EventEmitter<void>();
  @Input() username: string | undefined;

  onLogoutClick(): void {
    this.logoutClicked.emit();
  }

  // background: ThemePalette = undefined;

  // toggleBackground() {
  //   this.background = this.background ? undefined : 'primary';
  // }

}
