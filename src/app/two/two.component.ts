import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(res => console.log(res));
    this.id = this.route.snapshot.params.id;
    console.log(+this.route.snapshot.params['id']);
    this.route.params.subscribe(param => console.log(param['id']));
  }

  openDialogModal() {
    
  }
}
