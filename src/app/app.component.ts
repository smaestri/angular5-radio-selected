import { Component } from '@angular/core';
import { MyService } from './myservice.service'
import { membre } from './membre.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myMember : any;
  constructor(private myService: MyService) { 
    this.myMember={
      isPro :'toto'
    }
  }

  ngOnInit(){
    setTimeout(() => {
      console.log('test')
      // this.refreshValue.emit({isPro: true});
      this.myMember.isPro = 'tata';
    }, 1500);

  }

  refresh(event){
    console.log('refresh' + JSON.stringify(event))
    this.myMember = event;
    
  }

}
