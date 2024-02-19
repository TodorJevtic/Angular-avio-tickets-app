import { Injectable } from '@angular/core';
import { sample_tags, sample_tickets } from 'src/data';
import { Ticket } from '../models/Ticket';
import { Tag } from '../models/Tag';
import { HttpClient } from '@angular/common/http';
import { TICKETS_BY_ID_URL, TICKETS_BY_SEARCH_URL, TICKETS_BY_TAG_URL, TICKETS_TAGS_URL, TICKETS_URL } from '../constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(TICKETS_URL);
  }
  getAllTicketsBySearchTerm(searchTerm:string){
    return this.http.get<Ticket[]>(TICKETS_BY_SEARCH_URL + searchTerm)
  }
  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(TICKETS_TAGS_URL);
  }
  getAllTicketsByTag(tag:string):Observable<Ticket[]>{
    return tag === "All"?
    this.getAll():
    this.http.get<Ticket[]>(TICKETS_BY_TAG_URL + tag);
  }
  getTicketById(ticketId:string):Observable<Ticket>{
    return this.http.get<Ticket>(TICKETS_BY_ID_URL + ticketId)
  }
}
