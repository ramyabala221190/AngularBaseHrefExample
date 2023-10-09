import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
  constructor(@Inject(APP_BASE_HREF)private baseHref:string){}

  ngOnInit(){
    console.log(`Test2Component initialised. Base Href value : ${this.baseHref}`)
  }
}
