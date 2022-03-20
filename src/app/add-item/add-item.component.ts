import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


  title : string = '';
  description : string = '';

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }


  addItem(title: string, description: string){
    let todoObject :any = {
     title: `${title}`,
     description: `${description}`
    }

    console.log(todoObject);

    this.http.post('http://localhost:8080/api/item', todoObject)
     .subscribe( (res) => {
       console.log(res + " was saved!!")
     })

  }

}


