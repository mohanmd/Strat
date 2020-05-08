import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.page.html',
  styleUrls: ['./meetings.page.scss'],
})
export class MeetingsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  
  goDetail(){
    this.route.navigate(['view']);
  }  
  goLogin(){
    this.route.navigate(['login']);
  }
}
