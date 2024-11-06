import { Component } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carroslist.component.html',
})
export class CarroslistComponent {

  lista: Carro[] = [];

  constructor() {
    this.lista.push(new Carro(1, 'Fiesta'));
    this.lista.push(new Carro(2, 'Monza'));
    this.lista.push(new Carro(3, 'Ka'));


  }

  deleteById(carro: Carro) {
    if (confirm("Tem certeza que deseja deletar este registro?")) {
        let indice = this.lista.findIndex(x => x.id === carro.id);
        if (indice !== -1) {
            this.lista.splice(indice, 1);
        }
    }
}

}


