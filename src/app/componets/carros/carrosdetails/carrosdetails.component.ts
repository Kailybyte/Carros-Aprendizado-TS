import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../../models/carro';
import { ActivatedRoute, Router } from '@angular/router';

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
  router2 = inject (Router);

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
    if (this.carro.id > 0){
      alert('Editado com sucesso!');
      this.router2.navigate(['admin/carros'], { state: { carroeditado: this.carro } });
    }else
    alert('Salvo com sucesso!');
    this.router2.navigate(['admin/carros'], { state: { carroNovo: this.carro } });
  }
  
  }

