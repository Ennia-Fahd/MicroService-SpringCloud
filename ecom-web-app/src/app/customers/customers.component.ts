import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [HttpClientModule, NgForOf, NgIf],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  customers:any;

  constructor(private http:HttpClient,private router:Router) {
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/customer-service/customers?projection=fullCustomer")
      .subscribe({
        next:(value)=>{
          this.customers=value;
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }

  getOders(customer:any) {
    this.router.navigateByUrl("/orders/"+customer.id);
  }
}
