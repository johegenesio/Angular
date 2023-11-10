import { Component } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {
  listaDeFrasesFiltradas: Frases[] = [];
  listaDeFrases = [
    {frase: 'O amor não se vê com os olhos, mas com o coração. William Shakespeare', gender: 'Amor'},
    {frase: 'O amor é o espaço e o tempo tornados sensíveis ao coração. Marcel Proust', gender: 'Amor'},
    {frase: 'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos. Friedrich Nietzsche', gender: 'Motivacionais'},
    {frase: 'Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.São  Francisco de Assis', gender: 'Motivacionais'},
    {frase: 'Ser feliz sem motivo é a mais autêntica forma de felicidade. Carlos Drummond de Andrade', gender: 'Felicidade'},
    {frase: 'Saber encontrar a alegria na alegria dos outros é o segredo da felicidade. Georges Bernanos', gender: 'Felicidade'}
  ]
  filtrarFrases(value: string) {
    this.listaDeFrasesFiltradas = this.listaDeFrases.filter(frases => frases.gender === value);
  }
}

interface Frases {
  frase: string;
  gender: string;
}
