import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  getBilan(list:any[],criteria:string, value:any){
    let count=0;
    for(let i in list){
      if(list[i][criteria]===value){
        count++
      }
    }
    return count;
  }
}
