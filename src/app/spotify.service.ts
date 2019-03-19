import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQDNYI6xlLYUJfDmAkI67qd8oSJtqZp6zIHa5wNl9D37vlH57R3eh-l9Br8TtyTsRzPzsIbbIBdQ7mB-9lR-Z7eij66F3hMKCD5LQcQrGNJXgHa15cjW2aTGQ-FVf-w9IkUIJNy00dFXfF9XfSvFPIzA-JM1rbxgUEv7Qw"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
