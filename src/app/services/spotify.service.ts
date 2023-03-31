import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("spotify up!!")
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBDajPjf6g-meXDUWDwkRkfzYs5BIqf4tpU2OniAP0Xk6B5ghNqc4Q07l0ABPrcnE29yagg38rRlm9JkYyemOdup2YClWnZodGpWmhFVbIZYH5Jqwov'
    });
    return this.http.get(url, { headers });
  }
  getNewReleases(){
    return this.getQuery('browse/new-releases')
                .pipe( map( (data: any) => data.albums.items))
  }

  getArtistas(termino: string){
    return this.getQuery(`search?query=${ termino }&type=artist`)
                .pipe( map( (data: any) => data.artists.items))

  }

  getArtista(id: string){
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
            .pipe( map( (data : any) => data['tracks']));
  }
}
