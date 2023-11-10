import { Component } from '@angular/core';
import FormaBolo from './FormaBolo';

@Component({
  selector: 'app-bolo',
  templateUrl: './bolo.component.html',
  styleUrls: ['./bolo.component.css']
})
export class BoloComponent {
  boloCrianca = new FormaBolo("Bolo Feliz de Salsicho", 8, 'Morango', 20, 100);
}
