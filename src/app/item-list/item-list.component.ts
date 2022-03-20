import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataService} from "../data.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items :any;
  itemsSubject = new Subject();

  constructor(private http: HttpClient,
              private dataService: DataService) {
  }


  ngOnInit(): void {

      this.dataService.getItems().subscribe( (res:any) => {
        this.items = res;
      })
    console.log(this.items);

  }

}
