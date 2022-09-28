import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount?:number;
  mile?:number;

  onInput($event: any) {
    this.name=$event.target.value;
  }

  onChangeDate($event: any) {
    this.date= $event.target.value;
  }

  onChangeAmount($event: any) {
    this.amount=parseFloat($event.target.value)
  }

  onChangeMile($event: any) {
    this.mile=parseFloat($event.target.value)
  }
}
