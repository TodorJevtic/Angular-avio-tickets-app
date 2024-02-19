import { Ticket } from "./Ticket";

export class CartItem{
  constructor(public ticket:Ticket){
  }
  quantity:number = 1;
  price: number = this.ticket.cena;
}
