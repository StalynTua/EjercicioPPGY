import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsersComponent } from '../users/users.component';



@Component({
  selector: 'app-detalle-user',
  templateUrl: './detalle-user.component.html',
  styleUrls: ['./detalle-user.component.css']
})


export class DetalleUserComponent  {

  constructor(
    private routeAct: ActivatedRoute,
    private _user: UsersComponent
   
  ) {
    
    this.routeAct.paramMap.subscribe((params : ParamMap)=> {
      this.id = parseInt(params.get('id') || '1')
    }) 
    
    this.getUser = this._user.getUsuario(this.id)[0]
    
   
    console.log("user-Detalle ",this.getUser);

    
  }

  getUser:any = []
    id = 0


  

  

}
