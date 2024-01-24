import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/service/user.service';
import { loaduser } from 'src/app/store/share/user/User.Action';
import { getuserlist } from 'src/app/store/share/user/User.Selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
 constructor(
  private userService:UserService,
  private store:Store
 ){}
 ngOnInit(): void {
  this.store.dispatch(loaduser())
  this.store.select(getuserlist).subscribe(data=>{
    console.log("data",data);
  })
   
 }

}
