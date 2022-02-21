import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  idUser: number;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.idUser= this.route.snapshot.params['id'];
    //we will use it later to communicate with the backend

  }

}
