import { Nasa } from "@/models/nasa.model";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: "root"
})
export class NasaService{
  private nasaApiUrl: string = "https://api.nasa.gov/planetary/apod";
  private nasaToken: string = "eYsHWmBNZTcGekfx1hydqF1RERNlLLes2rbYZAec"

  private http = inject(HttpClient);
  private router = inject(Router);

  private toastr = inject(ToastrService);

  getToken(): string | null{
    return this.nasaToken;
  }

  getApod() : Observable<Nasa> {
    return this.http.get<Nasa>(`${this.nasaApiUrl}?api_key=${this.nasaToken}`);
  }

}