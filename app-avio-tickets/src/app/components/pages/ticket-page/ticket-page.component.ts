import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/Ticket';
import { CartService } from 'src/app/services/cart.service';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit{
  ticket!: Ticket;
  constructor(activatedRoute:ActivatedRoute, ticketService:TicketsService,private cartService:CartService, private router:Router){
    activatedRoute.params.subscribe((params) =>{
      if(params.id)
       ticketService.getTicketById(params.id).subscribe(serverTickets =>{
          this.ticket = serverTickets;
       });
    })
  }
  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.ticket)
    this.router.navigateByUrl('/cart-page')
  }

}
