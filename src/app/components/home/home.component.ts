import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private spotify_service: SpotifyService){
    this.loading = true;
    this.spotify_service.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
    })
  }
}
