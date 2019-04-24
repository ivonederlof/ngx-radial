import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public percentage = 0;

  ngOnInit(): void {
    this.startProgress();
  }

  /**
   * Start the progress
   */
  private startProgress() {
    const delay = 1000;
    const i = interval(delay)
      .subscribe(() => {
        if (this.percentage > 100 - 12) {
          i.unsubscribe();
          this.percentage = 100;
          return;
        }
        this.percentage += this.getRandomInt(12);
      });
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
