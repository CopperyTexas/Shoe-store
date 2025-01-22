import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { NavigationComponent } from '../../navigation/navigation.component';
import { SocialIconsComponent } from '../../social-icons/social-icons.component';
import { UserMenuComponent } from '../../user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  imports: [
    LogoComponent,
    SocialIconsComponent,
    NavigationComponent,
    UserMenuComponent,
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
