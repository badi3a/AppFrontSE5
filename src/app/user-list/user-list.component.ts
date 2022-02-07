import { Component, OnInit } from '@angular/core';
import {User} from "../core/model/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 listUser: User[];
  constructor() { }

  ngOnInit(): void {
    this.listUser=[
      {id:1, username:'Ahmed', name:'Ahmed Ben Foulen', email: 'ahmed@gmail.com', role:'admin'},
      {id:1, username:'Asma', name:'Asma Ben Foulen', email: 'Asma@gmail.com', role:'simple user'},
      {id:1, username:'Amine', name:'Amine Ben Foulen', email: 'Amine@gmail.com', role:'simple user'},
      {id:1, username:'Ahlem', name:'Ahlem Ben Foulen', email: 'Ahlem@gmail.com',role:'admin'},
    ]
  }
  delete(i:number):void{
    this.listUser.splice(i,1);
  }

}
