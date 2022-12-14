import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Thor', 'Ironman','Venom'];
  heroeBorrado:string | undefined = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop();
  }
}
