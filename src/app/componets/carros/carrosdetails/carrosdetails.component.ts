import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../../models/carro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss'] 
})
export class CarrosdetailsComponent {
  carro: Carro = new Carro(0, "");
  router = inject(ActivatedRoute);

  constructor() {
    let id = this.router.snapshot.params['id'];
    if (id > 0) {
      this.findById(id); 
    }
  }

  findById(id: number) {  //sem back end so inserido manuak// 
    let carroRetornado: Carro = new Carro(id, "Fiesta"); 
    this.carro = carroRetornado; 
  }

  save() {
    alert('Salvo com sucesso!');
  }
}
