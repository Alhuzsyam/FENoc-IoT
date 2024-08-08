import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiUrl = 'http://localhost:8000/api/posts/last';
  public sensorData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Inisialisasi interval untuk refresh data setiap 5 detik
    interval(5000).pipe(
      switchMap(() => this.getData())
    ).subscribe(data => {
      this.sensorData = data;
      console.log("hai");
    });
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
