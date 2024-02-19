import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  tags?:Tag[];
  constructor(ticketService:TicketsService){
      ticketService.getAllTags().subscribe(serverTags =>{
        this.tags = serverTags;
      })
    }
  ngOnInit(): void {
  }

}
