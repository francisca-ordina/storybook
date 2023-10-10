import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonSize, ButtonType } from './button.types'


@Component({
  selector: 'ypenburg-button',
  template: `
    <button
    type="button"
  
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >  
    {{ label }}
  </button>`,
  styleUrls: ['./button.component.scss'],

})

export class ButtonComponent {
  @Input()
  kind: ButtonType = "primary"


  /**
   * How large should the button be?
   */
  @Input()
  size: ButtonSize = "md";

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';


  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return [`ypenburg-button--${this.kind}`, `ypenburg-button--${this.size}`];
  }
}