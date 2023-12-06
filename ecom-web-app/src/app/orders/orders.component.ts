import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    DatePipe,
    HttpClientModule
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders:any;
  customerId!:number;

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/order-service/orders/search/byCustomerId?projection=fullOrder&customerId="+this.customerId)
      .subscribe({
        next:(value)=>{
          this.orders=value;
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }

  getOderDetails(order: any) {
    this.router.navigateByUrl("/order-details/"+order.id);
  }
}
