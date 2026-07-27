import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  Subject,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule], //Just directly import here FormModule needed for ngModel
})
export class HelloComponent implements OnInit {
  public http: HttpClient = inject(HttpClient); //Use inject in HttpClient
  public products: any[] = [];
  public searchText$ = new Subject<String>(); //Sinceswitch map needs a observable you need to pass a subject
  public searchText: String = '';

  ngOnInit() {
    this.searchText$
      .pipe( //The pipe would have dt, duc, switchMap should return http then subscribe to switch map 
        debounceTime(100),
        distinctUntilChanged(),
        switchMap((searchText) => {
          return this.http.get<any>(
            'https://dummyjson.com/products/search?q=' + searchText
          );
        })
      )
      .subscribe((data) => {
        console.log('Search Results::', data);
      });
  }

  public getSearchText(event: any) {
    this.searchText$.next(event.target.value);
  }
}
