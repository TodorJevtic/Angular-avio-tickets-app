import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/Ticket';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit{

  tickets:Ticket[] = [];

  constructor(private ticketsService: TicketsService, activatedRoute:ActivatedRoute){
    let ticketsObservable:Observable<Ticket[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
      ticketsObservable = this.ticketsService.getAllTicketsBySearchTerm(params.searchTerm);
      }
      else if(params.tag)
      ticketsObservable = this.ticketsService.getAllTicketsByTag(params.tag);
      else
      ticketsObservable = ticketsService.getAll();

      ticketsObservable.subscribe((serverTickets) => {
        this.tickets = serverTickets;
      })
    })
  }

  ngOnInit(): void {
  }

}
