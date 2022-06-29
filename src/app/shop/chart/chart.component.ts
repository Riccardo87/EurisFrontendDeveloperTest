import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { StatsCategories } from 'src/app/models/stats-categories';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chartData: ChartData;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const idStore = this.route.snapshot.paramMap.get('idStore');
    this.getProductsCategoryChart(idStore);
  }

  getProductsCategoryChart(idStore) {
    this.dataService.getProductsCategoryChart(idStore).subscribe(
      (response: StatsCategories[]) => {
        const category = response.map((res) => res.category);
        const numberOfProducts = response.map((res) => res.numberOfProducts);
        console.log(category);

        this.chartData = {
          labels: category,
          datasets: [
            {
              label: 'My First Dataset',
              data: numberOfProducts,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
              ],
            },
          ],
        };
      },
      () => {
        this.errorMessage = 'Errore di Avvio, ricaricare la pagina';
      }
    );
  }

  reloadPage(idStore) {
    this.errorMessage = null;
    this.getProductsCategoryChart(idStore);
  }

  backPage(): void {
    this.location.back();
  }
}
