import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, NgForOf, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products:any;

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/inventory-service/products?projection=fullProduct")
      .subscribe({
        next:(value)=>{
          this.products=value;
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }

}
