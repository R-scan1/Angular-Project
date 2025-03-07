import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [FormsModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';  
  logoUrl = 'assets/bridgelabz.png';
  url = 'https://www.bridgelabz.com';
  userName = '';  

  ngOnInit(): void {
    this.title = 'Hello from BridgeLabz.';
  }

  onClick($event: MouseEvent): void {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  updateTitle(): void {
    if (this.userName) {
      this.title = `Hello, ${this.userName} from BridgeLabz!`; 
    } else {
      this.title = 'Hello from BridgeLabz';  
    }
  }
}
