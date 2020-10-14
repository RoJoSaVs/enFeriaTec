import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-productores',
  templateUrl: './gestion-productores.component.html',
  styleUrls: ['./gestion-productores.component.css']
})
export class GestionProductoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   validateForm() {

    var x = document.forms["productorForm"]["cedula"].value;
      alert(x);
      return false;
  }

}
