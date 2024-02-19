import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/User';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  cartQuantity= 0;
  user!:User;
  constructor(cartService:CartService,private userService:UserService){

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }
  get isAuth(){
    return this.user.name;
  }

  title = 'app-avio-tickets';
}
