import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-checkmail',
  templateUrl: './checkmail.component.html',
  styleUrls: ['./checkmail.component.css']
})
export class CheckmailComponent implements OnInit {
  @Output() refreshValue = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
   
    
  }

  call(){

    setTimeout(() => {
      console.log('test')
      this.refreshValue.emit({isPro: true});
    }, 1500);

  }

}
