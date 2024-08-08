import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit{
  private apiUrl = 'http://localhost:8000/api/posts';
  private chart: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Chart.register(...registerables); // Daftarkan semua modul Chart.js yang diperlukan

    // Inisialisasi chart
    this.chart = new Chart("myChart2", {
      type: 'line',
      data: {
        labels: [], // Labels akan diisi berdasarkan waktu atau data yang relevan
        datasets: [
          {
            label: 'Volt A',
            data: [], // Data awal kosong, akan diisi dari API
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2,
            tension: 0.1,
            fill: false,
            pointRadius: 0,
            borderDash: [5, 5],
          },
          {
            label: 'Volt B',
            data: [],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0.1,
            fill: false,
            pointRadius: 0,
            borderDash: [5, 5],
          },
          {
            label: 'Volt C',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            tension: 0.1,
            fill: false,
            pointRadius: 0,
            borderDash: [5, 5],
          },
          {
            label: 'Curr A',
            data: [],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderWidth: 2,
            tension: 0.1,
            fill: false,
            pointRadius: 0,
            borderDash: [5, 5],
          },
          {
            label: 'Curr B',
            data: [],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderWidth: 2,
            tension: 0.1,
            fill: false,
            pointRadius: 0,
            borderDash: [5, 5],
          },
          {
            label: 'Curr C',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            tension: 0.1,
            fill: false,
            pointRadius: 0,
            borderDash: [5, 5],
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        elements: {
          line: {
            tension: 0.4 // Tambahkan ketegangan garis untuk membuatnya lebih mulus
          }
        }
      }
    });

    // Panggil fungsi fetchData pertama kali
    this.fetchData();

    // Set interval untuk refresh data setiap 60 detik
    interval(5000).subscribe(() => this.fetchData());
  }

  fetchData(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      console.log('Data from API:', data); // Tambahkan log untuk memeriksa data API

      // Buat labels dari created_at atau gunakan timestamp yang sesuai
      const labels = data.map((entry: any) => new Date(entry.created_at).toLocaleTimeString());

      // Format data sesuai dengan yang diharapkan oleh chart
      const voltA = data.map((entry: any) => parseFloat(entry.voltA));
      const voltB = data.map((entry: any) => parseFloat(entry.voltB));
      const voltC = data.map((entry: any) => parseFloat(entry.voltC));
      const currA = data.map((entry: any) => parseFloat(entry.currA));
      const currB = data.map((entry: any) => parseFloat(entry.currB));
      const currC = data.map((entry: any) => parseFloat(entry.currC));

      console.log('Volt A Data:', voltA);
      console.log('Volt B Data:', voltB);
      console.log('Volt C Data:', voltC);
      console.log('Curr A Data:', currA);
      console.log('Curr B Data:', currB);
      console.log('Curr C Data:', currC);

      // Update labels dan data chart
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = voltA;
      this.chart.data.datasets[1].data = voltB;
      this.chart.data.datasets[2].data = voltC;
      this.chart.data.datasets[3].data = currA;
      this.chart.data.datasets[4].data = currB;
      this.chart.data.datasets[5].data = currC;

      // Update chart
      this.chart.update();
    });
  }
}
