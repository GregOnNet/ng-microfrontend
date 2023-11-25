import { NgZone } from '@angular/core';

declare global {
  var ngZone: NgZone | null | undefined;
}
