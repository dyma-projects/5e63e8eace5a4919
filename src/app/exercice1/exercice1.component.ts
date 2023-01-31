import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  nom: string = "";
  constructor() {
  }

  public reverseString(str:string): string {
    return str.split('').reverse().join(''); 
}
}
