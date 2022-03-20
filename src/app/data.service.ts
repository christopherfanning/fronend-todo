import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {global} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items :any;

  constructor(private http: HttpClient) { }

  getItems(){
    console.log("Getting all the items from the data service.")
    return this.http.get('http://localhost:8080/api/item')
    // return this.items;

  }

  writeItem(){

    console.log("writing a new object from the data service.")
  }
}
