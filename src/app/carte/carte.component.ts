import { Component, OnInit } from '@angular/core';

const USERS = [
  { id: 1, firstName: 'Gauthier', lastName: 'Flichy', imgUrl: 'assets/img/gauthier.jpg' },
  { id: 2, firstName: 'Théo', lastName: 'Hinfray', imgUrl: 'assets/img/theo.jpg' }
];

@Component({
  selector: 'fght-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  title: string = 'Test';
  users = USERS;

  constructor() { }

  ngOnInit() {
  }

}
