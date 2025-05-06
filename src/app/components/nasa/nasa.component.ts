import { Nasa } from '@/models/nasa.model';
import { NasaService } from '@/services/nasa.service';
import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nasa',
  imports: [
    CommonModule
  ],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css'
})
export class NasaComponent {
  protected nasaService = inject(NasaService);
  private sanitizer = inject(DomSanitizer)
  nasa: WritableSignal<Nasa | undefined> = signal(undefined)
  url: WritableSignal<SafeUrl | string | undefined> = signal(undefined); 

  ngOnInit(): void{
    this.nasaService.getApod().subscribe({
      next: (response) => {          
        this.nasa.set(response)
        if(response.media_type == "video"){
          this.url.set(this.sanitizer.bypassSecurityTrustUrl(response.url));
        } else {
          this.url.set(response.url);
        }
      },
      error: () => {
        console.log("error");
      }
      },
    );

  }
}
