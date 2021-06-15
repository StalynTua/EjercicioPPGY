import { Component} from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { RolesComponent } from '../roles/roles.component';

@Component({
  selector: 'app-detalle-roles',
  templateUrl: './detalle-roles.component.html',
  styleUrls: ['./detalle-roles.component.css']
})
export class DetalleRolesComponent {

  constructor(

    private routeAct: ActivatedRoute,
    private _rol: RolesComponent
  ) { 

    this.routeAct.paramMap.subscribe((params : ParamMap)=> {
      this.id = parseInt(params.get('id') || '1')
    })  
    this.getRol = this._rol.getRol(this.id)[0]
    
  }

  
  id = 1
  getRol: any = []

 
}

