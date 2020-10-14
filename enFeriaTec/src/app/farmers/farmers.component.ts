import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Farmers{
    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public address: string,
        public phone: number,
        public sinpe: number,
        public places: string,
        public userName: string,
        public password: number
    ){

    }
}
@Component({
    selector: 'app-farmers',
    templateUrl: './farmers.component.html',
    styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {

    farmers: Farmers[];

    constructor(
        private httpClient: HttpClient
    ) { }

    ngOnInit(): void {
        this.getFarmers();
    }

    getFarmers(){
        this.httpClient.get<any>('https://localhost:5001/api/farmers').subscribe(
            response => {
                console.log(response);
                this.farmers = response;
            }
        );
    }

    // constructor(private http: HttpClient){
    //     this.http.get(this._url).toPromise().then(data => {
    //         console.log(data);
    //     });
    // }

}