import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
//import { IonicModule } from '@ionic/angular'; // Import IonicModule if needed
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { home, people, cart, cube, notifications, document, settings, helpCircle, logOut, search, add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { TabsComponent } from './shared/components/tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,

  imports: [
    IonicModule,NavbarComponent, SidebarComponent, TabsComponent
],
})//
export class AppComponent {
  constructor(private router: Router) {
    addIcons({ home, people, cart, cube, notifications, document, settings, helpCircle, logOut, search, add });

  }

  // Handles the Floating Action Button click event
  onFabClick() {
    console.log('FAB clicked!');
    // Navigate to the desired page or open a modal
    this.router.navigate(['/pos/sales']);
  }


}
