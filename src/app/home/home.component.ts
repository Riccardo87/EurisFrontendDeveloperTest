import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Store } from '../models/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  stores: Store[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllStores().subscribe(
      (respose: any) => {
        (this.stores = respose), console.log(respose);
      },
      (err: any) => console.log(err)
    );
  }
}
