import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {UserModel} from "../../model/User.model";
import {PageModel} from "../../model/Page.model";
import { Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  private url = "users";
  public page:number= 1 ;
  public perPage:number = 5
  public totalPages?:number;
  public currentPage = 1;
  public response?:PageModel;
  public users? :UserModel[]

  constructor(private userService:UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllUsers(this.page);
  }

  getAllUsers(page:number){
    this.userService.pagination(this.url , page , this.perPage).subscribe({
      next: (response) => {
        this.response = response;
        this.users = this.response.data;
        this.totalPages= this.response.totalPages;
        this.currentPage = this.response.page;
      }
    })
  }







}
