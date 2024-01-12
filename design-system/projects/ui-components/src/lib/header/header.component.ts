import { Component, Input } from '@angular/core';

@Component({
  selector: 'ypenburg-header',
  template: `
    <header 
      [ngClass]="classes"
    >
    <!-- {{ heading }} -->
    <a class="ypenburg-header__link" href="/">
      <img class="ypenburg-header__logo" src="images/logo_online.svg" />
    </a>
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
