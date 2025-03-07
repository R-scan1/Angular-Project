import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz'; 
  logoUrl = 'assets/bridgelabz.png';
  url = 'https://www.bridgelabz.com';
  userName = ''; 
  errorMessage = ''; 

  ngOnInit(): void {
    this.title = 'Hello from BridgeLabz.';
  }

  onClick($event: MouseEvent): void {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  updateTitle(): void {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; 
    if (this.userName && namePattern.test(this.userName)) {
      this.title = `Hello, ${this.userName} from BridgeLabz!`; 
      this.errorMessage = ''; 
    } else {
      this.title = 'Hello from BridgeLabz';  
      this.errorMessage = 'Please enter a valid name (at least 3 letters, starting with an uppercase letter).'; 
    }
  }
}
