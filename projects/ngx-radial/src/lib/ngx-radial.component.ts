import {Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'ngx-radial',
  templateUrl: './ngx-radial.component.html',
  styleUrls: [
    './ngx-radial.component.scss'
  ]
})
export class NgxRadialComponent implements OnInit, OnChanges {

  /**
   * The main percentage value of the radial progress indicator
   */
  @Input()
  public percentage = 0;
  /**
   * The stroke size of the svg in pixels
   */
  @Input()
  public stroke = 6;
  /**
   * The stroke size of the svg in pixels
   */
  @Input()
  public rounded: false;
  /**
   * An aspect ratio size
   */
  @Input()
  public size: number;
  /**
   * The font size for the percentage indicator
   */
  @Input()
  public fontSize: number;
  /**
   * The main color of the radial indicator
   */
  @Input()
  public color = 'blue';
  /**
   * The main color of the radial indicator
   */
  @Input()
  public placeholderColor = 'lightgray';
  /**
   * The main percentage color
   */
  @Input()
  public fontColor: string;

  public circumference = 2 * Math.PI * 47;
  public strokeDashoffset = 0;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2) {
  }

  ngOnInit() {
    this.setSizeIfNeeded();
    this.setFontSizeIfNeeded();
  }

  /**
   * Set size if needed
   */
  private setSizeIfNeeded() {
    if (this.size) {
      this._renderer.setStyle(
        this._el.nativeElement,
        'height',
        this.size + 'px');
      this._renderer.setStyle(
        this._el.nativeElement,
        'width',
        this.size + 'px');
    }
  }

  /**
   * Set the font size if needed
   */
  private setFontSizeIfNeeded() {
    if (this.fontSize) {
      this._renderer.setStyle(
        this._el.nativeElement,
        'font-size',
        this.fontSize + 'px');
    }
  }

  /**
   * On change percentage value
   */
  private onPercentageChanged(percentage: number) {
    this.strokeDashoffset = this.circumference - (percentage / 100) * this.circumference;
  }

  /**
   * Listen to changes
   */
  public ngOnChanges(changes: SimpleChanges) {
    if (changes['percentage']) {
      this.onPercentageChanged(changes['percentage'].currentValue);
    }
  }
}
