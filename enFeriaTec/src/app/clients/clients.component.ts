import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Clients{
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public address: string,
    public birthday: string,
    public phone: number,
    public userName: string,
    public password: number
  ){

  }

}


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Clients[];

    constructor(
        private httpClient: HttpClient
    ) { }

    ngOnInit(): void {
        this.getClients();
    }

    getClients(){
        this.httpClient.get<any>('https://localhost:5001/api/clients').subscribe(
            response => {
                console.log(response);
                this.clients = response;
            }
        );
    }
}
