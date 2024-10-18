import { Component } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e_commerce_v16';
  marks:number=10;

  myObservable=new Observable((observer: Observer<any>)=>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  })
  constructor(){
    this.myObservable.subscribe({
      next: (value)=>{
        console.log(value);
      },
      complete: ()=>{
        console.log("Complated")
      }
    })
  }
}

