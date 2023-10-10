import { Component, Input } from '@angular/core';

@Component({
  selector: 'ypenburg-header',
  template: `<header [ngClass]="classes">
    {{ heading }}
  </header>`,
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  @Input()
  heading = 'Text';

  public get classes(): string[] {
    return [`ypenburg-header`];
  }
}
