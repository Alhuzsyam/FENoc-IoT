import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private apiUrl = 'http://localhost:8000/api/posts';
  private chart: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Chart.register(...registerables); // Daftarkan semua modul Chart.js yang diperlukan

    // Inisialisasi chart
    this.chart = new Chart("myChart", {
      type: 'line', // Ubah tipe chart menjadi 'line'
      data: {
        labels: [], // Labels akan diisi berdasarkan waktu atau data yang relevan
        datasets: [
          {
            label: 'Kwh Today',
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
            label: 'Kwh Last',
            data: [], // Data awal kosong, akan diisi dari API
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0.1,
            fill: false,
            pointRadius: 0,
            borderDash: [5, 5],
          },
          {
            label: 'Kvarh',
            data: [], // Data awal kosong, akan diisi dari API
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            tension: 0.1,
            fill: false,
            pointRadius: 0,
            borderDash: [5, 5],
          },
          {
            label: 'T-L',
            data: [], // Data awal kosong, akan diisi dari API
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
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
      const kwhToday = data.map((entry: any) => parseFloat(entry.kwh_today));
      const kwhLast = data.map((entry: any) => parseFloat(entry.kwh_last));
      const kvarh = data.map((entry: any) => parseFloat(entry.kvarh));
      const tl = data.map((entry: any) => parseFloat(entry.tl));

      console.log('Kwh Today Data:', kwhToday);
      console.log('Kwh Last Data:', kwhLast);
      console.log('Kvarh Data:', kvarh);
      console.log('T-L Data:', tl);

      // Update labels dan data chart
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = kwhToday;
      this.chart.data.datasets[1].data = kwhLast;
      this.chart.data.datasets[2].data = kvarh;
      this.chart.data.datasets[3].data = tl;

      // Update chart
      this.chart.update();
    });
  }
}
