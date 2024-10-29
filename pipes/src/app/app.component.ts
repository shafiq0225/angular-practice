import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  height!: number;
  miles!: number

  

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange(event: Event){
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event){
    this.amount = parseFloat((event.target as HTMLInputElement).value);
  }

  onHeightChange(event: Event){
    this.height = parseFloat((event.target as HTMLInputElement).value);
  }

  car = {
    make: "Toyota",
    model: "Camry",
    year: 2000
  };

  onMilesChange(event: Event){
    this.miles = parseFloat((event.target as HTMLInputElement).value);
  }
}
