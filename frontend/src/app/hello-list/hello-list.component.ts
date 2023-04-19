import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Hello} from "../Hello";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-hello-list',
  templateUrl: './hello-list.component.html',
  styleUrls: ['./hello-list.component.css']
})
export class HelloListComponent {

  hellos: Observable<Hello[]>;

  constructor(private http: HttpClient) {
    this.hellos = of([]);
    this.fetchData();
  }

  fetchData() {
    this.hellos = this.http.get<Hello[]>('/backend/hello', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

}
