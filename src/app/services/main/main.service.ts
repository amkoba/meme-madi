import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) { }
  
  getAllMemes(){
    return this.http.get(`${environment.API_URL}/get_memes`)
  }

  generateMeme(meme){
    return this.http.post(`${environment.API_URL}/caption_image`, meme)
  }
}
