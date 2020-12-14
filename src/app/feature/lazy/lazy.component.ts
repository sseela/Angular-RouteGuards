import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => 
      {
        console.log(event);
        if(event instanceof NavigationStart) {
          this.spinner.show();
        }
        if(event instanceof NavigationEnd){
          setTimeout(()=> this.spinner.hide(), 2000);
        }
      }
      );
    
    //setTimeout(()=> this.spinner.hide(), 5000);
  }

}
