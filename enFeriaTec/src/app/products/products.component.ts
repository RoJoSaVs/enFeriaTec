import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Products{
  constructor(
    public name: string,
    public category: string,
    public picture: string,
    public cost: number,
    public sellMode: string,
    public amount: number
  ){

  }
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  products: Products[];

  constructor(
      private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(){
      this.httpClient.get<any>('https://localhost:5001/api/products').subscribe(
          response => {
              console.log(response);
              this.products = response;
          }
      );
  }

}
