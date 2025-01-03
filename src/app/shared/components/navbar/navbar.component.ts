import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Import IonicModule if needed

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true, // Marking the component as standalone
  imports: [IonicModule, CommonModule] 
})
export class NavbarComponent  implements OnInit {

  constructor() { }
pageTitle = 'My App';
unreadNotificationsCount = 5;
  ngOnInit() {}

}
