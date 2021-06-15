import { Inject, Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  constructor() {

    this.busqueda()


  }

  llamadas = [1, 3, 8, 5]

  repositorioA = [{ id: 1, grabacion: 'g1' }, { id: 2, grabacion: 'g2' }, { id: 3, grabacion: 'g3' }, { id: 4, grabacion: 'g4' }]

  repositorioB = [{ id: 5, grabacion: 'g5' }, { id: 6, grabacion: 'g6' }, { id: 7, grabacion: 'g7' }, { id: 8, grabacion: 'g8' }]

  respuesta: any[] = []

  busqueda() {


    let respuestaReposA = []

    for (let ele of this.repositorioA) {
      if (this.llamadas.includes(ele.id)) {

        respuestaReposA.push(ele)
      }

    }
    let respuestaReposB = []
    for (let ele of this.repositorioB) {
      if (this.llamadas.includes(ele.id)) {
        respuestaReposB.push(ele)
      }
    }
    this.respuesta.push({
          RA: respuestaReposA
    }, {
      
      RB: respuestaReposB
    })
    console.log("Repositorios A:",this.repositorioA,this.repositorioB );
    console.log("Respuestas: ", this.respuesta);

  }



}


