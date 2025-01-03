import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Import IonicModule if needed

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true, // Marking the component as standalone
  imports: [IonicModule] 
})
export class SidebarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
