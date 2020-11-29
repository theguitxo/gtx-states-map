import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

interface infoBoxItem {
  border: string;
  background: string;
}
interface infoBoxColors {
  [key: string]: infoBoxItem;
};

const colors: infoBoxColors = {
  ['blue']: {
    border: '#6E8FC8',
    background: '#B8C8E4',
  },
  ['green']: {
    border: '#6EC877',
    background: '#B8E4BC',
  },
  ['red']: {
    border: '#DC7C79',
    background: '#F1CBCA',
  },
};

@Directive({
  selector: '[gtxInfoBox]',
})
export class InfoBoxDirective implements OnInit {
  @Input('gtxInfoBox') set type(value: string) {
    if (Object.keys(colors).includes(value)) {
      this.typeValue = value;
    }
  }
  typeValue: string = 'green';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'padding', '0.5rem 1rem');
    this.renderer.setStyle(this.el.nativeElement, 'border', `solid 2px ${colors[this.typeValue].border}`);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', colors[this.typeValue].background);
    this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', '0.5rem');
  }

}
