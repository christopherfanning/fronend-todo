import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: any;

  constructor(private http: HttpClient) {
    this.items = [];
  }

  getItems() {
    return this.http.get('http://localhost:8080/api/item');
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/item').subscribe((res) => {
      console.log("Got the items!");
      this.items = res;
    })

    console.log(this.items);

  }

}
