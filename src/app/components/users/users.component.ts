import { Injectable } from '@angular/core';
import { Component} from '@angular/core';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

@Injectable({
  providedIn: 'root',
  
})

export class UsersComponent  {

  public getUsuario(id: any) {
    return this.usuarios.filter(usuario => usuario.id == id)

  }

  usuarios = [
    {
      id: 1,
      nombre: "Stalyn",
      apellido: "Tua",
      edad: 22
    },
    {
      id: 2,
      nombre: "Wladimir",
      apellido: "Sanipatin",
      edad: 30
    },
    {
      id: 3,
      nombre: "Abraham",
      apellido: "Males",
      edad: 23
    }
  ]


}
