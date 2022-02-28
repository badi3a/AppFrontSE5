import { Component, OnInit } from '@angular/core';
import {User} from "../core/model/user";
import {CalculService} from "../core/services/calcul.service";
import {UserService} from "../core/services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  listUser: User[];
  countAdmin: number
  constructor(private calcul: CalculService, private userService:UserService) { }

  ngOnInit(): void {
   this.userService.getAllUsers().subscribe(
     (data)=>this.listUser=data)
  }
  delete(i:number):void{
    this.listUser.splice(i,1);
  }
  getNumber(){
   this.countAdmin= this.calcul.getBilan(this.listUser,'role', 'admin')
  }
}
