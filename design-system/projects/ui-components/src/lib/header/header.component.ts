import { Component, Input } from '@angular/core';

@Component({
  selector: 'ypenburg-header',
  template: `
    <header 
      [ngClass]="classes"
    >
    {{ heading }}
    <img class="ypenburg-header__logo" src="images/logo_online.svg" />
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
