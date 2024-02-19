import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsersRectangle, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faUsersRect = faUsersRectangle;
  faPlus = faPlus;
  faUser = faUser;
}
