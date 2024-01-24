import { Component } from '@angular/core';
import { Personaje } from '../interface/personaje';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  personajes:Personaje[] = [{
    id: 1,
    nivel: 1,
    nombre: 'Frodo'
  },{
    id:2,
    nivel:3,
    nombre:'Gollum'
  },{
    id:3,
    nivel:100,
    nombre:''
  }]  
}
