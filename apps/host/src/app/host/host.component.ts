import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>This is the Host Application</p> `,
})
export class HostComponent {}
