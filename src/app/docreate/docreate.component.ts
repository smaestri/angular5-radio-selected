import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docreate',
  templateUrl: './docreate.component.html',
  styleUrls: ['./docreate.component.css']
})
export class DocreateComponent implements OnInit {
  @Input() member: any;
  constructor() { }

  ngOnInit() {
  }

  toggle(choice){
    console.log(choice)
  }

  ngAfterViewChecked() {

    // select the correct radio button via jquery


  }

}
