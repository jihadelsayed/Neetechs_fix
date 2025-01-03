import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss'],
  standalone: true, // Marking the component as standalone
  imports: [IonicModule, CommonModule] 
})
export class TabsComponent {

  constructor() {
  }
}
