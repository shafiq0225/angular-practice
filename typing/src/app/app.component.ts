import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  onTyping(event: Event) {
    this.enteredText = (event.target as HTMLInputElement).value;
  }

  compare(letter: string, enterText: string) {
    if (!enterText) {
      return 'pending';
    }

    return letter === enterText ? 'correct' : 'incorrect';
  }
}
