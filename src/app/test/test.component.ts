import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  constructor(@Inject(APP_BASE_HREF)private baseHref:string){}

  ngOnInit(){
    console.log(`TestComponent initialised. Base Href value : ${this.baseHref}`)
  }
}
