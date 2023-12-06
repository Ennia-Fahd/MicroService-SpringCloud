import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe, DecimalPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [HttpClientModule, JsonPipe, NgIf, DatePipe, NgForOf, DecimalPipe],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

  orderdetails:any;
  orderId!:number;

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {
    this.orderId=route.snapshot.params['orderId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/order-service/fullOrder/"+this.orderId)
      .subscribe({
        next:(value)=>{
          this.orderdetails=value;
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
