
import { Injectable } from '@angular/core';
import { Component} from '@angular/core';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
@Injectable({
  providedIn: 'root',
  
})
export class RolesComponent  {

 


  public getRol(id: any) {
    return this.roles.filter(rol => rol.id == id)

  }

  roles = [
    {
      id: 1,
      rol: "Gerente",
      departamento: "Administracion",
      
    },
    {
      id: 2,
      rol: "Secretario",
      departamento: "RRHH",
    
    },
    {
      id: 3,
      rol: "Supervisor",
      departamento: "TIC",
      
    }
  ]

 

}
