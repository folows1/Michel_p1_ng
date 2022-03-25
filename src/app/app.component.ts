import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Time } from './time';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTime: Time = {} as Time
  timeList: Time[] = []

  saveData(form: NgForm) {
    this.timeList.push(this.newTime)
    this.newTime = {} as Time
    form.resetForm()
    this.sort()
    console.log(this.timeList)
  }

  sort() {
    for (let i = 0; i < this.timeList.length; i++) {
      for (let j = 0; j < this.timeList.length - 1; j++) {

        if (this.timeList[j].point > this.timeList[j + 1].point) {
          let swap = this.timeList[j];
          this.timeList[j] = this.timeList[j + 1];
          this.timeList[j + 1] = swap;
        }
      }
    }
    this.timeList = this.timeList.reverse()
  }
}
