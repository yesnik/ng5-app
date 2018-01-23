import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string = 'My super goal';
  goals: array = [];

  constructor() { }

  ngOnInit() {
    this.updateItemCount();
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.updateItemCount();
  }

  updateItemCount() {
    this.itemCount = this.goals.length;
  }
}
