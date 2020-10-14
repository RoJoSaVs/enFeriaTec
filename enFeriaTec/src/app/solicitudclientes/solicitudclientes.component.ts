import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudclientes',
  templateUrl: './solicitudclientes.component.html',
  styleUrls: ['./solicitudclientes.component.css']
})
export class SolicitudclientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registro(){
    alert("Sus datos se han procesado con éxito");
  }

}
