import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-german-now',
  standalone: true,
  imports: [DatePipe],
  template: '{{ now | date }}',
})
export class GermanNowComponent {
  protected readonly now = new Date();
}
