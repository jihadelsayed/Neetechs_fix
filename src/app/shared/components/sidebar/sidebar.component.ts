import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Import IonicModule if needed

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true, // Marking the component as standalone
  imports: [IonicModule] 
})
export class SidebarComponent  implements OnInit {

constructor(private router: Router) {

  }

  ngOnInit() {}
  // Handles the logout logic
  logout() {
    console.log('User logged out');
    // Add your logout logic (e.g., clearing session or token)
    this.router.navigate(['/auth/login']);
  }
}
