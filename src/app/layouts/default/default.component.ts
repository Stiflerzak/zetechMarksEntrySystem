import { Component } from '@angular/core';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {

  sideBarOpen = true;

  constructor(){}

  ngOnInit(){}

  sideBarToggler(event: any){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
